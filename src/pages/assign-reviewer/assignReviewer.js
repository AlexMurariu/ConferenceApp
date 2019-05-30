import React from "react";
import { Redirect } from "react-router-dom";
import "./assignReviewer.css";
import axios from "axios";
export default class AssignReviewerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewers: [],
      reviewer: "",
      papers: [],
      paper: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/users/reviewers").then(res =>
      this.setState({
        reviewers: res.data
      })
    );
    axios.get("http://localhost:8080/papers").then(res =>
      this.setState({
        papers: res.data
      })
    );
  }

  makeName(email) {
    const name = email.split("@");
    return name[0];
  }

  renderOptions(type, item) {
    if (type === "rev") {
      const name = this.makeName(item.email);
      return (
        <option key={item.id} value={item.id}>
          {name}
        </option>
      );
    } else {
      return (
        <option key={item.id} value={item.id}>
          {item.paper_name}
        </option>
      );
    }
  }

  displayItems(type, list) {
    let items = [];
    for (let i = 0; i < list.length; i++) {
      items.push(this.renderOptions(type, list[i]));
    }
    return items;
  }

  invalidAssignment() {
    for (let i = 0; i < this.state.papers.length; i++) {
      if (this.state.papers[i].id === this.state.paper) {
        if (this.state.papers[i].authors_id === this.state.reviewer)
          return (
            <div class="alert alert-danger" role="alert">
              The reviewer is the same as the paper's author!.
            </div>
          );
      }
    }
    return null;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    for(let i = 0; i < this.state.papers.length; i++){
      if(this.state.papers[i].review_results.length === 4){
        return null;
      }
    }
    axios.put("http://localhost:8080/papers/assign-reviewer", {
      author_id: this.state.reviewer,
      paper_id: this.state.paper
    });
  }

  render() {
    if (!this.props.status) {
      return <Redirect to="/login" />;
    }
    return (
      <form className="assign-content" onSubmit={this.onSubmit}>
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
            {this.displayItems("rev", this.state.reviewers)}
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
            {this.displayItems("paper", this.state.papers)}
          </select>
          {this.invalidAssignment()}
          <button type="submit" className="btn btn-primary select-margins">
            Assign
          </button>
        </div>
      </form>
    );
  }
}
