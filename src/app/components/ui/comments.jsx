import React from 'react'
import _ from 'lodash'
import CommentsList, { AddCommentForm } from '../common/comments'
import { useComments } from '../../hooks/useComments'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const Comments = () => {
    const { comments, createComment, removeComment } = useComments()
    const { currentUser } = useAuth()

    const handleSubmit = (data) => {
        createComment(data)
    }

    const handleDelete = (id) => {
        removeComment(id)
    }

    const sortedComments = _.orderBy(comments, ['created_at'], ['desc'])

    return (
        <>
            <div className="card mb-2">
                <div className="card-body">
                    {currentUser ? (
                        <AddCommentForm onSubmit={handleSubmit} />
                    ) : (
                        <h4 className="text-center">
                            <Link
                                to={'/login'}
                                className="text-decoration-none"
                            >
                                Войдите в систему
                            </Link>
                            , чтобы иметь возможность писать комментарии!
                        </h4>
                    )}
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body">
                        <h2>Комментарии</h2>
                        <hr />
                        <CommentsList
                            comments={sortedComments}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Comments
