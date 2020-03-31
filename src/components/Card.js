import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class Card extends Component {
    render() {
        const {title, imgSrc, cardContent, footerContent, hasPlus } = this.props;
        console.log("this is title", title);
        return (
            <div className= "card" style={{margin: 20, borderRadius: 15, backgroundColor: "#FAFAFA"}}>
            {title && <header className="card-header">
                {hasPlus ?
                    // <div style={{display: "flex", justifyContent:"space-between"}}>
                    <React.Fragment>
                        <h3 className="card-header-title title is-7" style={{marginBottom: 0}} >
                            {title}
                        </h3>
                        <Link to="/editjournal" className="button" style={{backgroundColor: "#b7b7b7", color: "white", padding: 3, margin: "3px 10px 3px 0px"}}><FontAwesomeIcon icon={faPlus} style={{margin: 10}}/></Link>
                    </React.Fragment>
                    // </div>
                :
                    <h3 className="card-header-title title is-7" >
                        {title}
                    </h3>
                }
            </header>}

                {imgSrc && <img alt="" src = {imgSrc} style={{borderRadius: 15}} />}

                {cardContent && <div className="card-content">
                    {cardContent}
                </div>}
                {footerContent && <footer className="card-footer">
                    {footerContent}
                </footer>}

            </div>

        );
    }
}


export default Card;