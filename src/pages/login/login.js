import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./login.css"

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      email: this.props.email,
      password: this.props.password,
      status: this.props.status,
      isClicked: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const url = `http://localhost:8080/users/login?email=${this.state.email}`;
    axios
      .get(url)
      .then(res =>
        this.props.onChange(
          res.data.id,
          res.data.email,
          res.data.password,
          res.data.user_status
        )
      );
  }

  render() {
    if (this.props.status) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="login-div">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="InputEmail">Email address</label>
            <input
              value={this.state.email}
              onChange={this.onChange}
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password</label>
            <input
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
          <a href="#" className="acc" onClick={this.handelClick}>
            Create account
            {this.state.isClicked ? <Redirect to="/register" /> : null}
          </a>
        </form>
      </div>
    );
  }
}
