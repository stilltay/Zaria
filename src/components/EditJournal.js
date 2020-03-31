import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class EditJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log("i entered handlesubmit");
        const {addJournal} = this.props;
        const { value } = this.state;
        addJournal({
            moods: {
                mood: {
                    date: Date.now(),
                    moodLevel: 0
                }
            },
            journals: {
                entry: {
                    date: Date.now(),
                    text: ''
                }
            },
            appointments: {
                appointment: {
                    date: Date.now(),
                    doctor: ''
                }
            },
            dailyReminders: {
                reminder: {
                    date: Date.now(),
                    text: ''
                }
            }
        });
        event.preventDefault();
      }

  render() {
    var journalEntry =
    <React.Fragment>
        <textarea
            className="textarea"
            value={this.state.value}
            placeholder="Start typing here..."
            onChange={this.handleChange}
            style={{width: "100%", height:"60vh", backgroundColor: "#FAFAFA", borderRadius: 1, borderColor: "#b5b5b5"}}
        ></textarea>
        <div style={{display: "flex", justifyContent: "center"}}>
            {/* <button onClick={this.handleSubmit}>try me</button> */}
            <Link to="/" className="button" style={{backgroundColor: "#7F4E83", color: "white"}}>
                Save
            </Link>
        </div>;
    </React.Fragment>;

    return (
      <div className="has-navbar-fixed-bottom" style={{paddingBottom: 51, paddingTop: 64, backgroundColor: "#EAEAEA"}}>
          <Header name="Add Entry" hasExit={true} />
          <Card title="What's on your mind?" cardContent={journalEntry} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      journal: state.auth.journal,
      error: state.auth.error,
    };
  }

export default connect(mapStateToProps, actions)(EditJournal);