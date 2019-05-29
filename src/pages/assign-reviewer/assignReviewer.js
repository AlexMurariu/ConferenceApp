import React from "react";
import { Redirect } from "react-router-dom";
import "./assignReviewer.css";
export default class AssignReviewerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewer: "",
      paper: ""
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
      <div className="assign-content">
        <div className="assign-reviewer">
          <select
            value={this.state.reviewer}
            onChange={this.onChange}
            className="form-control select-margins"
            name="reviewer"
          >
            <option value="" disabled>
              Choose reviewer
            </option>
            <option value="Reviewer 1">Reviewer 1</option>
            <option value="Reviewer 2">Reviewer 2</option>
            <option value="Reviewer 3">Reviewer 3</option>
            <option value="Reviewer 4">Reviewer 4</option>
          </select>
          <select
            value={this.state.paper}
            onChange={this.onChange}
            className="form-control select-margins"
            name="paper"
          >
            <option value="" disabled>
              Choose paper
            </option>
            <option value="Paper 1">Paper 1</option>
            <option value="Paper 2">Paper 2</option>
            <option value="Paper 3">Paper 3</option>
            <option value="Paper 4">Paper 4</option>
          </select>
          <button className="btn btn-primary select-margins">Assign</button>
        </div>
      </div>
    );
  }
}
