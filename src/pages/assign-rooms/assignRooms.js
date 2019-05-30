import React from "react";
import { Redirect } from "react-router-dom";
import "./assignRooms.css";

export default class AssignRoomsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confList: "",
      conf: "",
      room: "",
      speaker: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  renderCard() {
    if (
      this.state.conf === "" ||
      this.state.room === "" ||
      this.state.speaker === ""
    ) {
      return null;
    }
    return (
      <div className="card room-assig">
        <h5 className="card-header">{this.state.conf}</h5>
        <div className="card-body">
          <h5 className="card-title">{this.state.room}</h5>
          <p className="card-text">{this.state.speaker}</p>
          <button className="btn btn-primary">
            Assign
          </button>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.status) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <div className="select-div">
          <select
            value={this.state.conf}
            onChange={this.onChange}
            className="form-control conf-select"
            name="conf"
          >
            <option value="" disabled>
              Choose conference
            </option>
            <option value="Conference 1">Conference 1</option>
            <option value="Conference 2">Conference 2</option>
            <option value="Conference 3">Conference 3</option>
            <option value="Conference 4">Conference 4</option>
          </select>
          <select
            value={this.state.room}
            onChange={this.onChange}
            className="form-control room-select"
            name="room"
          >
            <option value="" disabled>
              Choose room
            </option>
            <option value="100">Room 100</option>
            <option value="101">Room 101</option>
            <option value="102">Room 102</option>
            <option value="103">Room 103</option>
            <option value="104">Room 104</option>
            <option value="105">Room 105</option>
            <option value="200">Room 200</option>
            <option value="201">Room 201</option>
            <option value="202">Room 202</option>
            <option value="203">Room 203</option>
            <option value="204">Room 204</option>
            <option value="205">Room 205</option>
          </select>
          <select
            value={this.state.speaker}
            onChange={this.onChange}
            className="form-control speaker-select"
            name="speaker"
          >
            <option value="" disabled>
              Choose speaker
            </option>
            <option value="Speaker 1">Speaker 1</option>
            <option value="Speaker 2">Speaker 2</option>
            <option value="Speaker 3">Speaker 3</option>
            <option value="Speaker 4">Speaker 4</option>
          </select>
        </div>
        {this.renderCard()}
      </div>
    );
  }
}
