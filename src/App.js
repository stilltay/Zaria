import React from "react";
import './App.sass';

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Reflection from "./components/Reflection";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import Remind from "./components/Remind";
import Settings from "./components/Settings";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Reflection}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/remind"
        component={Remind}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/settings"
        component={Settings}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/createuser" component={CreateUser} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);