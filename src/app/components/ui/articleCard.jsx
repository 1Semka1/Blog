import React from 'react'
import PropTypes from 'prop-types'
import { useAuth } from '../../hooks/useAuth'
import { useUsers } from '../../hooks/useUsers'
import { Link } from 'react-router-dom'

const ArticleCard = ({ article, onDelete, onShowArticle }) => {
    const { currentUser } = useAuth()
    const { getUserById } = useUsers()
    const author = getUserById(article.author)

    return (
        <div className="col-lg-4 mb-4">
            <div className="card" style={{ height: 550 + 'px' }}>
                {article.photo && (
                    <img
                        src={article.photo}
                        className="card-img-top"
                        alt="..."
                        height="250"
                    ></img>
                )}

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{article.topic}</h5>
                    <p className="card-text">{article.description}</p>
                    <div className="d-flex flex-column mt-auto">
                        <div className="d-flex justify-content-between flex-wrap">
                            <button
                                className="btn btn-primary mb-2"
                                onClick={() => onShowArticle(article._id)}
                            >
                                Читать статью
                            </button>
                            {currentUser?.admin && (
                                <button
                                    className="btn btn-danger mb-2"
                                    onClick={() => onDelete(article._id)}
                                >
                                    Удалить
                                </button>
                            )}
                        </div>
                        <div className="d-flex justify-content-between mt-1">
                            <div>
                                <Link
                                    to={`/${author?._id}`}
                                    className="text-decoration-none ms-2"
                                >
                                    {author?.name}
                                </Link>
                                <span className="ms-2">{article.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onShowArticle: PropTypes.func.isRequired
}

export default ArticleCard
