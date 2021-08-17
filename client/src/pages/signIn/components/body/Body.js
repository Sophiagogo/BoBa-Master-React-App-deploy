import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './auth/Login'
import Register from './auth/Register';
import {useSelector} from 'react-redux';
import NotFound from './utils/NotFound';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Profile from '../../profile';
import HomeScreen from "../../../HomeScreen";

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth

    return (
        <div className="page-container">
            <div className="content-wrap">
                <section>
                    <Switch>
                        <Route path = "/sign-in" component={isLogged ? NotFound : Login} exact />
                        <Route path = "/register" component={isLogged ? NotFound : Register} exact />
                        <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPassword} exact />
                        <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPassword} exact />
                        <Route path="/profile" component={isLogged ? HomeScreen : NotFound} exact />
                
                    </Switch>
                </section>
            </div>
        </div>
    )
}

export default Body
