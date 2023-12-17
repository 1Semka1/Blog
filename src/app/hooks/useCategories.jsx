import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import categoryService from '../services/category.service'

const CategoriesContext = React.createContext()

export const useCategories = () => {
    return useContext(CategoriesContext)
}

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        if (error !== null) {
            toast(error)
            setError(null)
        }
    }, [error])

    async function getCategories() {
        try {
            const { content } = await categoryService.get()
            setCategories(content)
            setLoading(false)
        } catch (error) {
            errorCatcher(error)
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
        setLoading(false)
    }

    return (
        <CategoriesContext.Provider value={{ isLoading, categories }}>
            {children}
        </CategoriesContext.Provider>
    )
}

CategoriesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
