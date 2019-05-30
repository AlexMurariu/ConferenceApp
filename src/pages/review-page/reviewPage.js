import React from "react";
import { Redirect } from "react-router-dom";
import "./reviewPage.css";
import Paper from "../../components/paper/paper";
import axios from "axios";

export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: "",
      users: [],
      papers: [],
      score: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/papers").then(res => {
      this.setState({
        papers: res.data
      });
    });
    axios.get("http://localhost:8080/users").then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  renderOptions(paper) {
    return (
      <option key={paper.id} value={paper.id}>
        {paper.paper_name}
      </option>
    );
  }

  displayItems() {
    let list = [];
    for (let i = 0; i < this.state.papers.length; i++) {
      const keys = Object.keys(this.state.papers[i].review_results.firstReview);
      for (let j = 0; j < keys.length; j++) {
        if (keys[j] === this.props.id) {
          list.push(this.state.papers[i]);
        }
      }
    }
    let items = [];
    for (let i = 0; i < list.length; i++) {
      items.push(this.renderOptions(list[i]));
    }
    return items;
  }

  displayPaper() {
    let body = {};
    for (let i = 0; i < this.state.papers.length; i++) {
      if (this.state.papers[i].id === this.state.paper) {
        body = this.state.papers[i];
      }
    }
    let user = {};
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].id === body.authors_id) {
        user = this.state.users[i];
      }
    }
    const name = user.email.split("@");
    return (
      <Paper
        author={name[0]}
        paperName={body.paper_name}
        abstractUrl={body.abstract_url}
        paperUrl={body.paper_url}
        paperSubject={body.paperSubject}
        className="card cls"
      />
    );
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios.put("http://localhost:8080/papers/assign-review", {
      author_id: this.props.id,
      qualifier: this.state.score,
      paper_id: this.state.paper
    });
  }

  render() {
    if (!this.props.status) {
      return <Redirect to="/login" />;
    }
    console.log(this.state.score)
    return (
      <form className="review-div" onSubmit={this.onSubmit}>
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
            {this.displayItems()}
          </select>
          <select
            value={this.state.score}
            onChange={this.onChange}
            className="form-control slct"
            name="score"
          >
            <option value="0" disabled>
              Choose score
            </option>
            <option value="1">Strong reject</option>
            <option value="2">Reject</option>
            <option value="3">Weak reject</option>
            <option value="4">Weak Accept</option>
            <option value="5">Accept</option>
            <option value="6">Strong accept</option>
          </select>
          <button type="submit" className="btn btn-primary sub-btn">
            Submit review
          </button>
        </div>
        {this.state.paper ? this.displayPaper() : null}
      </form>
    );
  }
}
