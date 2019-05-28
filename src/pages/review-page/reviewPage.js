import React from "react";
import { Redirect } from "react-router-dom";
import "./reviewPage.css";
import Paper from "../../components/paper/paper";

export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: "",
      score: ""
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
      <div className="review-div">
        <div className="select-div1">
          <select
            value={this.state.paper}
            onChange={this.onChange}
            className="form-control slct"
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
          <select
            value={this.state.score}
            onChange={this.onChange}
            className="form-control slct"
            name="score"
          >
            <option value="" disabled>
              Choose score
            </option>
            <option value="Strong reject">Strong reject</option>
            <option value="Reject">Reject</option>
            <option value="Weak reject">Weak reject</option>
            <option value="Weak accept">Weak Accept</option>
            <option value="Accept">Accept</option>
            <option value="Strong accept">Strong accept</option>
          </select>
          <button className="btn btn-primary sub-btn">Submit review</button>
        </div>
        {this.state.paper ? (
          <Paper
            author={"Author " + this.state.paper}
            className="card paper-card"
          />
        ) : null }
      </div>
    );
  }
}
