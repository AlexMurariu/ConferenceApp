import React from "react";
import getLogedInUser from "../../services/getLogedInUser";
import { Redirect } from "react-router-dom";

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="register-div">
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
          <button className="btn btn-primary" onClick={this.validateForm}>
            Log in
          </button>
        </form>
      </div>
    );
  }
}
