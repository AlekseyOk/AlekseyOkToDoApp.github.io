import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Private from "./components/private/private";
import Public from "./components/public/public";
import { AuthProvider } from "./components/auth/auth"
import  PrivateRoute   from "./components/private-route/private-route"
import Callback from "./components/callback/callback.jsx";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/callback" component={Callback} />
          <PrivateRoute path="/private" component={Private} />
          <Redirect to="/public" />
        </Switch>
      </AuthProvider> 
      </BrowserRouter>
    );
  }
}

export default App;