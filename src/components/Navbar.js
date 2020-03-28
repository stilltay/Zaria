import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions";
import { connect } from "react-redux";

class Navbar extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
        };
    render() {
        return (
        <div>
            <nav id="navbarBottom" className="navbar is-fixed-bottom has-shadow">
                <div className = "columns is-centered is-mobile">
                    <div className = "column is-one-third">
                        <Link className="navbar-item is-active" to="/">
                            <b>Reflections</b>
                        </Link>
                    </div>
                    <div className = "column is-one-third">
                        <Link className="navbar-item is-active" to="/remind">
                            <b>Reminders</b>
                        </Link>
                    </div>
                    <div className = "column is-one-third">
                        <div className="navbar-item is-active" onClick={this.handleLogout}>
                            <b>Logout</b>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError
    };
  }

export default connect(mapStateToProps)(Navbar);