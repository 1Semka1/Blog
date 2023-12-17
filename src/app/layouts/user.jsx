import React from 'react'
import { useParams } from 'react-router-dom'
import CreateArticlePage from '../components/page/createArticlePage'
import UserPage from '../components/page/userPage'

const User = () => {
    const { write } = useParams()

    return (
        <>
            {write === 'write' ? (
                <div className="container mt-5">
                    <div className="row">
                        <CreateArticlePage />
                    </div>
                </div>
            ) : (
                <UserPage />
            )}
        </>
    )
}

export default User
