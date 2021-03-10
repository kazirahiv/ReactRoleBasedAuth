
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
function PublicRoutes() {
    return (
        <Fragment>
        <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    </Fragment>
    )
}

export default PublicRoutes
