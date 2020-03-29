import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        const {currPage} = this.props;
        var dashClass, schedClass, settClass;
        if (currPage === "Reflection") {
            dashClass = "is-active";
            schedClass = "";
            settClass = "";
        } else if (currPage === "Remind") {
            dashClass = "";
            schedClass = "is-active";
            settClass = "";
        } else if (currPage === "Settings") {
            dashClass = "";
            schedClass = "";
            settClass = "is-active";
        }
        return (
        <div className="navbar is-fixed-bottom">
            <div className="tabs is-fullwidth" style={{position: "absolute", bottom: "0px", width: "100%", backgroundColor: "white", paddingTop: "10px"}}>
                <ul>
                    <li className={dashClass}>
                        <Link to="/">
                            <b>Dashboard</b>
                        </Link>
                    </li>
                    <li className={schedClass}>
                        <Link  to="/remind">
                            <b>Schedule</b>
                        </Link>
                    </li>
                    <li className={settClass}>
                        <Link  to="/settings">
                            <b>Settings</b>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        );
    }
}


export default Navbar;