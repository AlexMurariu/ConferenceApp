import React from "react";
import { Redirect } from "react-router-dom";
import "./assignRooms.css";

export default class AssignRoomsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div class="card room-assig">
        <h5 class="card-header">{this.state.conf}</h5>
        <div class="card-body">
          <h5 class="card-title">{this.state.room}</h5>
          <p class="card-text">{this.state.speaker}</p>
          <a href="#" class="btn btn-primary">
            Assign
          </a>
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
            <option value="Room 1">Room 1</option>
            <option value="Room 2">Room 2</option>
            <option value="Room 3">Room 3</option>
            <option value="Room 4">Room 4</option>
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
