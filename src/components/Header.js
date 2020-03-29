import React, { Component } from "react";

class Header extends Component {
    render() {
        const {name} = this.props;
        return (
            <div className="navbar" style={{backgroundColor: "#7F4E83", color: "white"}}>
                <p style={{textAlign: "center", paddingTop: 35, paddingBottom: 5}}> <b>{name}</b></p>
            </div>

        );
    }
}


export default Header;