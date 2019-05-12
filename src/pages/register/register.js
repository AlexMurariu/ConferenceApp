import React from "react";
import "./register.css";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noInput: false,
      invalidEmail: false,
      invalidPass: false
    };

    this.validateForm = this.validateForm.bind(this);
  }
  validateForm() {
    console.log(this.state.invalidEmail);
    let emailOnInput = "" + document.getElementById("InputEmail").value;
    let passOnInput = "" + document.getElementById("InputPassword").value;
    if (!emailOnInput.match(/[A-Za-z0-9]*@[A-Za-z0-9]*\.[A-Za-z]*/g)) {
      this.setState({
        invalidEmail: true
      });
    } else {
      this.setState({
        invalidEmail: false
      });
    }

    if (passOnInput.length < 4) {
      this.setState({
        invalidPass: true
      });
    } else {
      this.setState({
        invalidPass: false
      });
    }

    if (emailOnInput === "" || passOnInput === "") {
      this.setState({
        noInput: true
      });
    } else {
      this.setState({
        noInput: false
      });
    }
  }

  render() {
    return (
      <div className="register-div">
        <form>
          <div className="form-group">
            <label htmlFor="InputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="InputPassword"
              placeholder="Password"
            />
          </div>
        </form>
        <button className="btn btn-primary" onClick={this.validateForm}>
          Submit
        </button>
        {this.state.noInput ? (
          <div className="alert alert-danger no-input-alert" role="alert">
            No email or password inserted!
          </div>
        ) : this.state.invalidEmail ? (
          <div className="alert alert-danger no-input-alert" role="alert">
            Invalid email!
          </div>
        ) : this.state.invalidPass ? (
          <div className="alert alert-danger no-input-alert" role="alert">
            Password too short!
          </div>
        ) : null}
      </div>
    );
  }
}
