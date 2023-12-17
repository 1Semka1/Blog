import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import ArticlePage from '../components/page/articlePage'
import ArticlesListPage from '../components/page/articleListPage'
import EditArticlePage from '../components/page/editArticlePage'
import { useAuth } from '../hooks/useAuth'
import { useArticles } from '../hooks/useArticles'

const Articles = () => {
    const { articleId, edit } = useParams()
    const { getArticle } = useArticles()
    const { currentUser } = useAuth()
    const article = getArticle(articleId)

    return (
        <>
            {articleId ? (
                edit === 'edit' ? (
                    currentUser?._id === article.author ||
                    currentUser?.admin ? (
                        <EditArticlePage />
                    ) : (
                        <Redirect to={`/articles/${articleId}`} />
                    )
                ) : (
                    <ArticlePage articleId={articleId} />
                )
            ) : (
                <ArticlesListPage />
            )}
        </>
    )
}

export default Articles
