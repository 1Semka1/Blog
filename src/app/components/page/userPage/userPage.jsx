import React from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useHistory, useParams } from 'react-router-dom'
import { useArticles } from '../../../hooks/useArticles'
import { useUsers } from '../../../hooks/useUsers'

const UserPage = () => {
    const history = useHistory()
    const { userId } = useParams()
    const { currentUser } = useAuth()
    const { getUserById } = useUsers()
    const { getArticlesByUserId } = useArticles()

    const userArticles = getArticlesByUserId(userId)
    const pageOwner = getUserById(userId)

    const handleClick = (articleId) => {
        history.push(`/articles/${articleId}`)
    }

    if (pageOwner) {
        return (
            <>
                <div className="container">
                    <div className="row gutters-sm">
                        {currentUser._id === userId ? (
                            <>
                                <h1>
                                    Добро пожаловать,{' '}
                                    {currentUser.name.split(' ')[0]}!
                                </h1>
                                <hr />
                            </>
                        ) : (
                            pageOwner && (
                                <div className="col-md-4 mb-3">
                                    <div className="card mb-3">
                                        <div className="card-body bg-dark rounded-3">
                                            <div className="d-flex flex-column align-items-center text-center position-relative">
                                                <img
                                                    src={pageOwner.avatar}
                                                    className="rounded-circle"
                                                    alt="avatar"
                                                    height="150"
                                                />
                                                <h4 className="text-light mt-3 mb-0">
                                                    {pageOwner.name}
                                                </h4>
                                                {pageOwner.admin && (
                                                    <p className="text-warning mb-0">
                                                        Администратор
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                        <div className="col-md-8">
                            <h2>Cтатьи:</h2>
                            {userArticles &&
                                userArticles.map((a) => (
                                    <div
                                        className="shadow p-3 bg-dark mb-2 rounded-3"
                                        key={a._id}
                                    >
                                        <div className="d-flex justify-content-between align-items-center">
                                            {a.photo && (
                                                <img
                                                    src={a.photo}
                                                    className="rounded-circle"
                                                    alt="avatar"
                                                    height="60"
                                                />
                                            )}
                                            <p className="ms-3 mb-0 text-light">
                                                <b>{a.topic}</b>
                                            </p>
                                            <button
                                                className="btn btn-dark border-2 border-light ms-auto"
                                                onClick={() =>
                                                    handleClick(a._id)
                                                }
                                            >
                                                {' '}
                                                Перейти
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default UserPage
