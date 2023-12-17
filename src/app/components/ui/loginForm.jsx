import React, { useEffect, useState } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import CheckBoxField from '../common/form/checkBoxField'
import { useAuth } from '../../hooks/useAuth'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const history = useHistory()
    const [data, setData] = useState({
        email: '',
        password: '',
        stayOn: false
    })
    const [errors, setErrors] = useState({})
    const [enterError, setEnterError] = useState(null)
    const { signIn } = useAuth()

    useEffect(() => {
        validate()
    }, [data])

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Email обязателен для заполнения'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            }
        }
    }

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            ...target
        }))
        setEnterError(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        try {
            await signIn(data)
            history.push(
                history.location.state?.from?.pathname
                    ? history.location.state.from.pathname
                    : '/'
            )
        } catch (error) {
            setEnterError(true)
        }
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const { email, password, stayOn } = data
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label={'Email'}
                name="email"
                value={email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label={'Пароль'}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField value={stayOn} onChange={handleChange} name="stayOn">
                Оставаться в системе
            </CheckBoxField>
            {enterError && <p className="text-danger">{enterError}</p>}
            <button
                className="btn btn-primary w-100 mx-auto"
                disabled={!isValid || enterError}
            >
                Отправить
            </button>
        </form>
    )
}

export default LoginForm
