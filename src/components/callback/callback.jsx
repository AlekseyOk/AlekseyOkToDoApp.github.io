import React, { Component } from 'react';
import loading from './loading.svg';
import { withAuth } from '../auth/auth'
import './callback.css';

class Callback extends Component {
  componentDidMount(){
      const {handleAuthentication} = this.props;
      if(handleAuthentication){
          handleAuthentication()
      }
  }

  render() {
    return (
      <div className='loading' >
        <img src={loading} alt='loading'/>
      </div>
    );
  }
}

export default withAuth(Callback);