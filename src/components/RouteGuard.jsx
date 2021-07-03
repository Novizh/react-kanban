import React from 'react';
import { Route, useHistory } from 'react-router-dom';

function RouteGuard(props) {
    const history = useHistory();

    return(
        <Route 
            path={props.path}
            render={() => {
                if (localStorage.getItem('access_token')) {
                    return props.children;
                } else {
                    history.push(`/login`);
                }
            }}
        />
    )
}

export default RouteGuard;