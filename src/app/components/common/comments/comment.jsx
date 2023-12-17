import React from 'react'
import PropTypes from 'prop-types'
import { dateDisplay } from '../../../utils/dateDisplay'
import { useUsers } from '../../../hooks/useUsers'
import { useAuth } from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'

const Comment = ({ comment, onDelete }) => {
    const { getUserById } = useUsers()
    const { currentUser } = useAuth()
    const user = getUserById(comment.userId)

    if (user) {
        return (
            <div className="bg-light card-body  mb-3">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-start ">
                            <img
                                src={user.avatar}
                                className="rounded-circle shadow me-3"
                                alt="avatar"
                                height="60"
                            />
                            <div className="flex-grow-1 flex-shrink-1">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-1">
                                            <Link
                                                to={`/${user._id}`}
                                                className="text-decoration-none"
                                            >
                                                {user.name}
                                            </Link>
                                            <span className="small text-muted">
                                                {' '}
                                                {dateDisplay(
                                                    comment.created_at
                                                )}
                                            </span>
                                        </p>
                                        {(currentUser?.admin ||
                                            currentUser?._id ===
                                                comment.userId) && (
                                            <button
                                                className="btn btn-sm text-primary d-flex align-items-center"
                                                onClick={() =>
                                                    onDelete(comment._id)
                                                }
                                            >
                                                <i className="bi bi-x-lg"></i>
                                            </button>
                                        )}
                                    </div>
                                    <p className="small mb-0">
                                        {comment.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return 'Loading...'
    }
}

Comment.propTypes = {
    comment: PropTypes.object,
    onDelete: PropTypes.func
}

export default Comment
