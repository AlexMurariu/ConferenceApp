import React from "react";
import { Redirect } from "react-router-dom";
import "./createEvent.css";
import axios from "axios";

export default class CreateEventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confName: "",
      date: "",
      deadline: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const dates = this.state.date.split("/");
    const evDate = { day: dates[0], month: dates[1], year: dates[2] };
    const dead = this.state.deadline.split("/");
    const dl = { day: dead[0], month: dead[1], year: dead[2] }
    axios.post("http://localhost:8080//conferences/post", {
      eventDate: evDate,
      itinerary: {},
      event_name: this.state.confName,
      app_deadline: dl
    });
  }

  render() {
    if (!this.props.status) {
      return <Redirect to="/login" />;
    }
    return (
      <form className="event-content" onSubmit={this.onSubmit}>
        <div className="event-input">
          <div className="form-group">
            <label htmlFor="confName">Conference name</label>
            <input
              value={this.state.confName}
              onChange={this.onChange}
              className="form-control"
              name="confName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              value={this.state.date}
              onChange={this.onChange}
              className="form-control"
              name="date"
              placeholder="dd/mm/yyyy"
              maxLength="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline date for papers</label>
            <input
              value={this.state.deadline}
              onChange={this.onChange}
              className="form-control"
              name="deadline"
              placeholder="dd/mm/yyyy"
              maxLength="10"
            />
          </div>
          <button type="submit" className="btn btn-primary event-margin">
            Create
          </button>
        </div>
      </form>
    );
  }
}
