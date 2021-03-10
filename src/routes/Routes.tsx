import React, { memo } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import { createBrowserHistory } from 'history';
import Auth from './Auth';

function Routes() {
    return (
        <Router history={createBrowserHistory({})}>
			<Switch>
				<Route path="/app">
					<PrivateRoutes />
				</Route>
				<Route path="">
					<Auth />
				</Route>
			</Switch>
		</Router>
    )
}

export default memo(Routes);
