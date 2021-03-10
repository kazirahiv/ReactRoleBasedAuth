import React, { Fragment } from 'react'
import { Redirect, useRouteMatch } from 'react-router-dom';
import TopNav from '../components/common/TopNav';
import PrivateRoutesConfig from '../config/PrivateRoutesConfig';
import { getAllowedRoutes, isLoggedIn } from '../utils/Utils';

function PrivateRoutes() {
    const match = useRouteMatch('/app');
	let allowedRoutes = [];

	if (isLoggedIn()){
        allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
    }
	else{
        return <Redirect to="/" />;
    }
    
    return (
        <Fragment>
            { match ? <TopNav routes={allowedRoutes} prefix={match.path} className="bg-white" /> : <></> }
		</Fragment>
    )
}

export default PrivateRoutes

