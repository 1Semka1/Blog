import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import articleService from '../services/article.service'
import { toast } from 'react-toastify'
import { nanoid } from 'nanoid'
import { useAuth } from './useAuth'

const ArticlesContext = React.createContext()

export const useArticles = () => {
    return useContext(ArticlesContext)
}

const ArticlesProvider = ({ children }) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { currentUser } = useAuth()

    useEffect(() => {
        getArticlesList()
    }, [])

    useEffect(() => {
        if (error !== null) {
            toast(error)
            setError(null)
        }
    }, [error])

    async function getArticlesList() {
        try {
            const { content } = await articleService.get()
            setArticles(content)
            setLoading(false)
        } catch (error) {
            errorCatcher(error)
            setLoading(true)
        }
    }

    async function createArticle(data) {
        const article = {
            ...data,
            _id: nanoid(),
            author: currentUser._id,
            date: transformDate()
        }
        try {
            const { content } = await articleService.create(article)
            setArticles((prevState) => [...prevState, content])
            toast.success('Статья успешно создана!', {
                position: 'bottom-right',
                theme: 'dark'
            })
        } catch (error) {
            errorCatcher(error)
        }
    }

    async function updateArticle(data) {
        const article = {
            ...data,
            date: transformDate()
        }
        try {
            const { content } = await articleService.update(article)
            const newArticles = [...articles]
            const articleIndex = newArticles.findIndex(
                (a) => a._id === content._id
            )
            newArticles[articleIndex] = content
            setArticles(newArticles)
        } catch (error) {
            errorCatcher(error)
        }
    }

    async function removeArticle(id) {
        try {
            const { content } = await articleService.remove(id)
            if (content === null) {
                setArticles((prevState) =>
                    prevState.filter((a) => a._id !== id)
                )
            }
        } catch (error) {
            errorCatcher(error)
        }
    }

    function getArticle(articleId) {
        return articles.find((a) => a._id === articleId)
    }

    function getArticlesByUserId(userId) {
        return articles.filter((a) => a.author === userId)
    }

    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
        setLoading(false)
    }

    function transformDate() {
        const currentDate = new Date()
        const year = currentDate.getFullYear()
        const month = String(currentDate.getMonth() + 1).padStart(2, '0')
        const day = String(currentDate.getDate()).padStart(2, '0')

        return `${year}.${month}.${day}`
    }

    return (
        <ArticlesContext.Provider
            value={{
                articles,
                isLoading,
                getArticle,
                getArticlesByUserId,
                createArticle,
                updateArticle,
                removeArticle
            }}
        >
            {children}
        </ArticlesContext.Provider>
    )
}

ArticlesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default ArticlesProvider
