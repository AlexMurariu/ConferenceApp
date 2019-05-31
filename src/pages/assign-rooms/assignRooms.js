import React from "react";
import { Redirect } from "react-router-dom";
import "./assignRooms.css";
import axios from "axios";

export default class AssignRoomsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedPapers: [],
      conf: "",
      room: "",
      paper: "",
      startHour: "",
      endHour: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/users").then(res =>
      this.setState({
        users: res.data
      })
    );
  }

  makeName(item) {
    const name = item.split("@");
    return name[0];
  }

  renderOptions(type, item) {
    if (type === "speaker") {
      return (
        <option key={item.id} value={item.id}>
          {item.paper_name}
        </option>
      );
    } else {
      return (
        <option key={item.id} value={item.id}>
          {item.event_name}
        </option>
      );
    }
  }

  displayItems(type, list) {
    if (type === "speaker") {
      let newList = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].conference_id === this.state.conf) {
          newList.push(list[i]);
        }
      }
      let items = [];
      for (let i = 0; i < newList.length; i++) {
        items.push(this.renderOptions(type, newList[i]));
      }
      return items;
    }
    let items = [];
    for (let i = 0; i < list.length; i++) {
      items.push(this.renderOptions(type, list[i]));
    }
    return items;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let paper = "";
    let speakerID = "";
    for (let i = 0; i < this.props.selected.length; i++) {
      if (this.props.selected[i].id === this.state.paper) {
        paper = this.props.selected[i].paper_name;
        speakerID = this.props.selected[i].authors_id;
      }
    }
    axios.put("http://localhost:8080/conferences/addEvent", {
      conference_id: this.state.conf,
      room: this.state.room,
      name: paper,
      speaker: speakerID,
      start_hour: this.state.startHour,
      end_hour: this.state.endHour
    });
  }

  renderCard() {
    if (
      this.state.conf === "" ||
      this.state.room === "" ||
      this.state.paper === "" ||
      this.state.startHour === "" ||
      this.state.endHour === ""
    ) {
      return null;
    }

    let event = "";
    for (let i = 0; i < this.props.confs.length; i++) {
      if (this.state.conf === this.props.confs[i].id) {
        event = this.props.confs[i].event_name;
      }
    }

    let speakerID = "";
    for (let i = 0; i < this.props.selected.length; i++) {
      if (this.state.paper === this.props.selected[i].id) {
        speakerID = this.props.selected[i].authors_id;
      }
    }

    let speaker = "";
    for (let i = 0; i < this.state.users.length; i++) {
      if (speakerID === this.state.users[i].id) {
        speaker = this.state.users[i].email.split("@")[0];
      }
    }

    return (
      <div className="card room-assig elem">
        <h5 className="card-header">{event}</h5>
        <div className="card-body">
          <h5 className="card-title">Speaker {speaker}</h5>
          <p className="card-text">
            Room {this.state.room} from {this.state.startHour} to{" "}
            {this.state.endHour}
          </p>
          <button type="submit" className="btn btn-primary">
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
      <form onSubmit={this.onSubmit}>
        <div className="select-div">
          <select
            value={this.state.conf}
            onChange={this.onChange}
            className="form-control elem"
            name="conf"
          >
            <option value="" disabled>
              Choose conference
            </option>
            {this.displayItems("conf", this.props.confs)}
          </select>
          <select
            value={this.state.room}
            onChange={this.onChange}
            className="form-control elem"
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
            value={this.state.paper}
            onChange={this.onChange}
            className="form-control elem"
            name="paper"
          >
            <option value="" disabled>
              Choose paper
            </option>
            {this.displayItems("speaker", this.props.selected)}
          </select>
          <input
            value={this.state.startHour}
            onChange={this.onChange}
            className="form-control elem"
            name="startHour"
            placeholder="From 00:00"
            maxLength="5"
          />
          <input
            value={this.state.endHour}
            onChange={this.onChange}
            className="form-control elem"
            name="endHour"
            placeholder="To 00:00"
            maxLength="5"
          />
        </div>
        {this.renderCard()}
      </form>
    );
  }
}
