import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";


class Reflection extends Component {

  render() {
    var cardCont = <h1 className = "title is-7" style={{color: "#7F4E83"}}>
    How are you feeling today? </h1>;
    var footerCont =
    <React.Fragment>
        <span role="img" className="card-footer-item">😀</span>
        <span role="img"  className="card-footer-item">🙂</span>
        <span role="img"  className="card-footer-item">😐</span>
        <span role="img"  className="card-footer-item">🙁</span>
        <span role="img"  className="card-footer-item">😮</span>
    </React.Fragment>;

    var journalCont =
    <React.Fragment>
        <div style={{display:"flex", justifyContent:"flex-start"}}>
            <h1 className = "title is-7" style={{color: "#7F4E83"}}>
            March 29, 2020</h1><div style={{fontSize: 10, paddingLeft: 10}}>EDIT</div>
        </div>
        <h1 className = "subtitle is-6"> Today, I went for a walk. It was so soothing to hear the birds in the trees and to be outside despite the heat.</h1>
    </React.Fragment>;

    return (
      <div className="has-navbar-fixed-bottom" style={{paddingBottom: 51, backgroundColor: "#EAEAEA"}}>
          <Header name="Dashboard"/>
          <Card title="Your Happiness Report" imgSrc={require('../images/dash.png')} cardContent={cardCont} footerContent={footerCont}/>
          <Card title="Journal Entries" cardContent={journalCont} />
          <Navbar currPage="Reflection" />
      </div>
    );
  }
}

export default Reflection;