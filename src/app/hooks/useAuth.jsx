import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import userService from '../services/user.service'
import { toast } from 'react-toastify'
import localStorageService, {
    setTokens
} from '../services/localStorage.service'
import { useHistory } from 'react-router-dom'

export const httpAuth = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
})

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const history = useHistory()
    const [currentUser, setUser] = useState()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function getUserData() {
        try {
            const { content } = await userService.getCurrentUser()
            setUser(content)
        } catch (error) {
            errorCatcher(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            getUserData()
        } else {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        if (error !== null) {
            toast(error)
            setError(null)
        }
    }, [error])

    async function signUp({ email, password, ...rest }) {
        try {
            const { data } = await httpAuth.post('accounts:signUp', {
                email,
                password,
                returnSecureToken: true
            })
            setTokens(data)
            await createUser({
                _id: data.localId,
                email,
                admin: false,
                avatar: `https://api.dicebear.com/6.x/thumbs/svg?seed=${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(2)}`,
                ...rest
            })
        } catch (error) {
            errorCatcher(error)
            const { code, message } = error.response.data.error
            if (code === 400) {
                if (message === 'EMAIL_EXISTS') {
                    const errorObject = {
                        email: 'Пользователь с таким email уже существует'
                    }
                    throw errorObject
                }
            }
        }
    }

    async function signIn({ email, password }) {
        try {
            const { data } = await httpAuth.post(
                'accounts:signInWithPassword',
                {
                    email,
                    password,
                    returnSecureToken: true
                }
            )
            setTokens(data)
            await getUserData()
        } catch (error) {
            errorCatcher(error)
            const { code, message } = error.response.data.error
            if (code === 400) {
                switch (message) {
                    case 'INVALID_PASSWORD':
                        showError('Email или пароль введены некорректно')
                        throw new Error()
                    case 'EMAIL_NOT_FOUND':
                        showError('Пользователя с таким email не существует')
                        throw new Error()
                    case 'INVALID_EMAIL':
                        showError('Некорректный email')
                        throw new Error()
                    default:
                        showError(
                            'Слишком много попыток входа. Попробуйте позднее'
                        )
                        throw new Error()
                }
            }
        }
    }

    function logOut() {
        localStorageService.removeAuthData()
        setUser(null)
        history.push('/')
    }

    async function createUser(data) {
        try {
            const { content } = await userService.create(data)
            setUser(content)
        } catch (error) {
            errorCatcher(error)
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
    }

    function showError(text) {
        toast.error(text, {
            position: 'bottom-right',
            theme: 'dark'
        })
    }

    return (
        <AuthContext.Provider value={{ signUp, signIn, logOut, currentUser }}>
            {!isLoading ? children : 'Loading...'}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default AuthProvider
