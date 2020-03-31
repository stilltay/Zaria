import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";

class Remind extends Component {


  render() {
    var dailyCont =
    <React.Fragment>
        <div style={{display:"flex", justifyContent:"flex-start"}}>
            <h1 className = "title is-7" style={{color: "#7F4E83"}}>
            March 29, 2020</h1><div style={{fontSize: 10, paddingLeft: 10}}>EDIT</div>
        </div>
        <h1 className = "subtitle is-6">Eat cake</h1>
    </React.Fragment>;

    var appCont =
    <React.Fragment>
        <div style={{display:"flex", justifyContent:"flex-start"}}>
            <h1 className = "title is-7" style={{color: "#7F4E83"}}>
            March 29, 2020</h1><div style={{fontSize: 10, paddingLeft: 10}}>EDIT</div>
        </div>
        <h1 className = "subtitle is-6">Dr. Lindsey</h1>
    </React.Fragment>;
    return (
      <div className="has-navbar-fixed-bottom" style={{paddingBottom: 51, paddingTop: 64}}>
          <Header name="Schedule"/>
          <Card title="Upcoming Appointments" cardContent={appCont} hasPlus />
          <Card title="Daily Reminders" cardContent={dailyCont} hasPlus />
          <Navbar currPage="Remind"/>
      </div>
    );
  }
}

export default Remind;