import React from 'react'
import PropTypes from 'prop-types'
import Comments from '../../ui/comments'
import { useArticles } from '../../../hooks/useArticles'
import { Link, useHistory } from 'react-router-dom'
import { useUsers } from '../../../hooks/useUsers'
import { CommentsProvider } from '../../../hooks/useComments'
import { useAuth } from '../../../hooks/useAuth'

const ArticlePage = ({ articleId }) => {
    const history = useHistory()
    const { getArticle } = useArticles()
    const { getUserById } = useUsers()
    const { currentUser } = useAuth()
    const article = getArticle(articleId)
    const author = getUserById(article?.author)

    if (article && author) {
        return (
            <div className="container">
                <h1>{article.topic}</h1>
                <hr />
                <h3>{article.description}</h3>
                <p>{article.text}</p>
                <div className="d-flex align-items-end mb-1">
                    <img
                        src={author.avatar}
                        alt=""
                        height="40"
                        className="img-responsive rounded-circle"
                    />
                    <Link
                        to={`/${author._id}`}
                        className="text-decoration-none ms-2"
                    >
                        {author.name}
                    </Link>
                </div>
                <p>{article.date}</p>
                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-primary"
                        onClick={() => history.push('/articles')}
                    >
                        <i className="bi bi-caret-left-fill"></i> Все статьи
                    </button>
                    {(currentUser?._id === author._id ||
                        currentUser?.admin) && (
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                history.push(
                                    history.location.pathname + '/edit'
                                )
                            }
                        >
                            Редактировать
                        </button>
                    )}
                </div>
                <hr />
                <div className="col-md-6 mx-auto mt-5">
                    <CommentsProvider>
                        <Comments />
                    </CommentsProvider>
                </div>
            </div>
        )
    } else {
        return <h1 className="text-center">Loading...</h1>
    }
}

ArticlePage.propTypes = {
    articleId: PropTypes.string.isRequired
}

export default ArticlePage
