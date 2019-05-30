import React from "react";
import { Redirect } from "react-router-dom";
import "./uploadAbstract.css";
import axios from "axios";
export default class UploadAbstractPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driveURL: "",
      subject: "",
      paperName: "",
      conf: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderOptions(conf) {
    return (
      <option key={conf.id} value={conf.id}>
        {conf.event_name}
      </option>
    );
  }

  displayItems() {
    let items = [];
    for (let i = 0; i < this.props.confs.length; i++) {
      items.push(this.renderOptions(this.props.confs[i]));
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
    axios.post("http://localhost:8080/papers/post-abstract", {
      authors_id: this.props.id,
      conference_id: this.state.conf,
      abstract_url: this.state.driveURL,
      paper_name: this.state.paperName,
      paperSubject: this.state.subject
    })
  }

  render() {
    if (!this.props.status) {
      return <Redirect to="/login" />;
    }
    console.log(this.state.conf);
    return (
      <form className="abstract-content" onSubmit={this.onSubmit}>
        <div className="abstract-input">
          <select
            value={this.state.conf}
            onChange={this.onChange}
            className="form-control input-pname"
            name="conf"
          >
            <option value="" disabled>
              Choose conference
            </option>
            {this.displayItems()}
          </select>
          <input
            value={this.state.driveURL}
            onChange={this.onChange}
            className="form-control input-pname"
            name="driveURL"
            placeholder="Google Drive URL"
          />
          <select
            value={this.state.subject}
            onChange={this.onChange}
            className="form-control input-pname"
            name="subject"
          >
            <option value="" disabled>
              Choose subject
            </option>
            <option value="BIOLOGY">Biology</option>
            <option value="LITERATURE">Literature</option>
            <option value="MATHEMATICS">Mathematics</option>
            <option value="IT">IT</option>
            <option value="AI">Artificial inteligence</option>
            <option value="ROBOTICS">Robotics</option>
          </select>
          <input
            value={this.state.paperName}
            onChange={this.onChange}
            className="form-control input-pname"
            name="paperName"
            placeholder="Paper name"
          />
          <button type="submit" className="btn btn-primary input-pname">Upload</button>
        </div>
      </form>
    );
  }
}
