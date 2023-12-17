import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import NavProfile from './navProfile'

const NavBar = () => {
    const { currentUser } = useAuth()

    return (
        <>
            <nav className="navbar bg-dark mb-3 ">
                <div className="container-fluid">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active text-light">
                                Главная
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className="nav-link active text-light"
                            >
                                О нас
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/articles"
                                className="nav-link active text-light"
                            >
                                Статьи
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {currentUser ? (
                            <NavProfile />
                        ) : (
                            <Link
                                to="/login"
                                className="nav-link active text-light"
                            >
                                Вход
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
