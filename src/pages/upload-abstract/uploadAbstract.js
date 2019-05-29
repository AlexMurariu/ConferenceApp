import React from "react";
import { Redirect } from "react-router-dom";
import "./uploadAbstract.css";
export default class UploadAbstractPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driveURL: "",
      subject: "",
      paperName: ""
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
      <div className="abstract-content">
        <div className="abstract-input">
          <input
            value={this.state.driveURL}
            onChange={this.onChange}
            className="form-control"
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
          <button className="btn btn-primary input-pname">Upload</button>
        </div>
      </div>
    );
  }
}
