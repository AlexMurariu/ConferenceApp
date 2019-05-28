import React from "react";
import { Redirect } from "react-router-dom";
import "./createEvent.css";
import Conference from "../../components/conference/conference";
export default class CreateEventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confName: "",
      date: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (!this.props.status) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="conf-div">
        <div className="inputs">
          <input
            value={this.state.confName}
            onChange={this.onChange}
            className="form-control sep-input"
            name="confName"
            placeholder="Conference name"
          />
          <input
            value={this.state.date}
            onChange={this.onChange}
            className="form-control sep-input"
            name="date"
            placeholder="dd/mm/yyyy"
            maxLength="10"
          />
          <button className="btn btn-primary btn-event">Create</button>
        </div>
        {this.state.confName !== "" && this.state.date !== "" ? (
          <Conference
            className="card conf-card"
            eventName={this.state.confName}
            date={this.state.date}
          />
        ) : null}
      </div>
    );
  }
}
