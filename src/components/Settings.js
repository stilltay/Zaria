import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { logoutUser } from "../actions";
import { connect } from "react-redux";
import Card from "./Card";

class Settings extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
        };
    render() {
        var content =
            <React.Fragment>
                <h1 className = "title is-6">
                Things will get better soon!
                </h1>

                <h1 className = "subtitle is-6">We would like to thank you for using our app and remind you that we are in this together! The light at the end of the tunnel is only getting brighter!</h1>

                <button id="btnLogOut" className="button" onClick={this.handleLogout} style={{backgroundColor: "#7F4E83", color: "white"}}>
                Logout
                </button>
            </React.Fragment>;

        return (
        <div className="has-navbar-fixed-bottom" style={{paddingBottom: 51,  paddingTop: 64}}>
            <Header name="Settings"/>
            <Card imgSrc= {require('../images/settings.jpg')} cardContent={content}/>
            <Navbar currPage="Settings"/>
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

export default connect(mapStateToProps)(Settings);