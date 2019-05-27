import React from "react";
import "./register.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class RegisterForm extends React.Component {
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
      .post("http://localhost:8080/register", {
        email: this.state.email,
        password: this.state.password,
        user_status: this.state.status
      })
      .then(() =>
        this.props.onChange(
          this.state.email,
          this.state.password,
          this.state.status
        )
      );
  }

  render() {
    if (this.props.status) {
      return <Redirect to="/home" />;
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
          <div className="form-group">
            <label htmlFor="InputStatus">Status</label>
            <select
              value={this.state.status}
              onChange={this.onChange}
              className="form-control"
              name="status"
            >
              <option value="" disabled>
                Choose your status
              </option>
              <option value="LISTENER">Listener</option>
              <option value="AUTHOR">Author</option>
              <option value="CO-CHAIR">Co-Chair</option>
              <option value="CHAIR">Chair</option>
            </select>
          </div>
          <div className="form-group">
            <label>Payment</label>
            <input
              value={this.state.cardNumber}
              //onChange={this.onChange}
              className="form-control"
              name="cardNumber"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              maxLength="19"
            />
            <div className="card-info-div">
              <input
                value={this.state.expirationDate}
                //onChange={this.onChange}
                className="form-control"
                name="expirationDate"
                placeholder="MM/YY"
                maxLength="5"
              />
              <input
                value={this.state.cvv}
                //onChange={this.onChange}
                className="form-control card-code-input"
                name="cvv"
                placeholder="xxx"
                maxLength="3"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}
