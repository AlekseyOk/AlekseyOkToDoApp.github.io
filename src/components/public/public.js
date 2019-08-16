import React from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../auth/auth';
import ToDo from '../../containers/todo';

export default withAuth(({ isAuthorized }) =>
  isAuthorized ? (
    <Redirect to='/private' />
  ) : (
    <div>
        <ToDo/>
    </div>
  )
);
