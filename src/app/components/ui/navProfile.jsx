import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const NavProfile = () => {
    const { currentUser } = useAuth()
    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen((prevState) => !prevState)
    }

    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center text-light">
                <div className="me-2 text-light">{currentUser.name}</div>
                <img
                    src={currentUser.avatar}
                    alt=""
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={'w-100 dropdown-menu' + (isOpen ? ' show' : '')}>
                <Link to={`/${currentUser._id}`} className="dropdown-item">
                    Профиль
                </Link>
                <Link
                    to={`/${currentUser._id}/write`}
                    className="dropdown-item"
                >
                    Написать статью
                </Link>
                <Link to={'/logout'} className="dropdown-item">
                    Выйти
                </Link>
            </div>
        </div>
    )
}

export default NavProfile
