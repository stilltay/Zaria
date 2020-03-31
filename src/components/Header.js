import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        const {name, hasExit} = this.props;
        return (
            <div className="navbar is-fixed-top" style={{backgroundColor: "#7F4E83", color: "white"}}>
                {hasExit ?
                    <div style={{paddingTop: 10}}>
                    <Link to="/" style={{color: "white", marginLeft: 25}}>
                       <FontAwesomeIcon icon={faTimes} style={{fontSize: 30}}/>
                    </Link>
                    <p style={{display: "flex", justifyContent: "center", marginTop: -25}}><b>{name}</b></p>
                    </div> :
                <p style={{display: "flex", justifyContent: "center", paddingTop: 35, paddingBottom: 5, fontSize: 17}}>

                     <b>{name}</b></p>
                    }
            </div>

        );
    }
}


export default Header;