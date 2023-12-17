import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/ui/navBar'
import Articles from './layouts/articles'
import Main from './layouts/main'
import Login from './layouts/login'
import About from './layouts/about'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './hooks/useAuth'
import User from './layouts/user'
import ArticlesProvider from './hooks/useArticles'
import { UsersProvider } from './hooks/useUsers'
import { CategoriesProvider } from './hooks/useCategories'
import ProtectedRoute from './components/common/protectedRoute'
import LogOut from './layouts/logOut'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <div className="font-montserrat-script">
            <AuthProvider>
                <NavBar />
                <ArticlesProvider>
                    <UsersProvider>
                        <CategoriesProvider>
                            <Switch>
                                <Route path="/" exact component={Main} />
                                <Route path="/about" component={About} />
                                <Route path="/login/:type?" component={Login} />
                                <Route path="/logout" component={LogOut} />
                                <ProtectedRoute
                                    path="/articles/:articleId?/:edit?"
                                    component={Articles}
                                />
                                <ProtectedRoute
                                    path="/:userId/:write?"
                                    component={User}
                                />
                                <Redirect to="/" />
                            </Switch>
                        </CategoriesProvider>
                    </UsersProvider>
                </ArticlesProvider>
            </AuthProvider>
            <ToastContainer />
        </div>
    )
}

export default App
