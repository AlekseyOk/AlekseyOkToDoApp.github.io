import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../auth/auth';

const PrivateRoute = withAuth(
  ({ component: RouteComponent, isAuthorized, loginPath, ...rest }) => (
    <Route
      {...rest}
      render={routeProps =>
        isAuthorized ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/public"} />
        )
      }
    />
  )
);

export default PrivateRoute;