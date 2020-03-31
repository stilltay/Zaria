import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { createUser } from "../actions";
import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    paddingTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "none"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
});

class CreateUser extends Component {
  state = { email: "", password: "" };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(createUser(email, password));
  };

  render() {
    const { classes, createUserError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <Container component="main" maxWidth="xs" style={{height: "100vh"}}>
          <Paper className={classes.paper}>
          <div className={classes.avatar}>
              <img alt="" src={require("../images/Zaria.png")} style={{width: 150}} />
            </div>
            <Typography component="h1" variant="h5">
              Create Account
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handlePasswordChange}
            />
            {createUserError && (
              <Typography component="p" className={classes.errorText}>
                Incorrect email or password.
              </Typography>
            )}
            <Button
              type="button"
              fullWidth
              variant="contained"
              style={{backgroundColor: "#7F4E83", color: "white"}}
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Create Account
            </Button>
            <Link to="/login">
              Return to Login Page
            </Link>{' '}
          </Paper>
        </Container>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isCreatingUser: state.auth.isCreatingUser,
    createUserError: state.auth.createUserError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default withStyles(styles)(connect(mapStateToProps)(CreateUser));