import React, { Component } from "react";

class Card extends Component {
    render() {
        const {title, imgSrc, cardContent, footerContent} = this.props;
        console.log("this is title", title);
        return (
            <div className= "card" style={{margin: 20, borderRadius: 15, backgroundColor: "#FAFAFA"}}>
            {title && <header className="card-header">
                <h3 className="card-header-title title is-7" >
                {title}
                </h3>
                {/* <button className=" button btn-plum"><a href="#" class = "btn-plum-text">▼</a></button> */}
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