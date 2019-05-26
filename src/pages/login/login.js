import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.email,
      password: this.props.password,
      status: this.props.status
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
    axios
      .get("http://localhost:8080/users/login?email=misu@mail.com")
      .then(res => this.setState({
        user: res.data.user_status
      }));
  }

  render() {
    if (this.props.status) {
      return <Redirect to="/" />;
    }
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
          <button
            button="submit"
            className="btn btn-primary"
            onClick={() =>
              this.props.onChange(
                this.state.email,
                this.state.password,
                this.state.status
              )
            }
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}
