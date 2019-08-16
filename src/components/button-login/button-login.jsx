import React from 'react';
import { withAuth } from '../auth/auth';
import { Button } from 'react-bootstrap';
import './button-login.css';

export default withAuth(({ isAuthorized, authorize, noAuthorize }) =>
  (
    <React.Fragment>
      <Button 
      className='buttonLogin'
      onClick={isAuthorized ? noAuthorize : authorize} 
      variant='outline-light'>{isAuthorized ? 'LOGOUT' : 'LOGIN'}
      </Button>
    </React.Fragment>
  )
);
