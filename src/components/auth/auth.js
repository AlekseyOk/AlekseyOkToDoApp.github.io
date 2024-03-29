import React, { Component } from 'react';
import auth0 from 'auth0-js';
import { withRouter } from 'react-router-dom';

const { Provider, Consumer: AuthConsumer } = React.createContext({
  isAuthorized: false 
});

class AuthProvider extends Component {

 state = { isAuthorized: false }

  auth0 = new auth0.WebAuth({
    domain: "dev-keiuj5p2.auth0.com",
    clientID: "G419u0lKDEovVCf1Bq5IZG3t2Kxmoand",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });


  authorize = () => {
    this.auth0.authorize();
  }
  noAuthorize = () => {
    this.setState({ isAuthorized: false });
  }
  
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.setState({ isAuthorized: true }, () => {
          this.props.history.push("/private");
        });
      } else if (err) {
        this.setState({ isAuthorized: false }, () => {
          this.props.history.push("/private");
        });
      }
    });
  };

  render() {
    const { isAuthorized } = this.state;

    return (
      <Provider
        value={{
          isAuthorized,
          authorize: this.authorize,
          noAuthorize: this.noAuthorize,
          handleAuthentication: this.handleAuthentication
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

const AuthProviderWithRouter = withRouter(AuthProvider);

export { AuthProviderWithRouter as AuthProvider };

export function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <AuthConsumer>
          {contextProps => <WrappedComponent {...contextProps} {...rest} />}
        </AuthConsumer>
      );
    }
  };
}