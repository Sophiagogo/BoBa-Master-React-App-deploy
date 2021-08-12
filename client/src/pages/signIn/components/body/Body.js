import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './auth/Login'
import Register from './auth/Register';

function Body() {
    
    return (
        <section>
            <Switch>
                <Route path = "/sign-in" component={Login} exact />
                <Route path = "/register" component={Register} exact />
            </Switch>
        </section>
    )
}

export default Body
