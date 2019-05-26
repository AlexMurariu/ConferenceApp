import React from "react";
import Register from "../pages/register/register";
import LogInForm from "../pages/login/login";
import Home from "../pages/home/home";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: ""
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(email, pass, status) {
    this.setState({
      email: email,
      password: pass,
      status: status
    });
  }

  render() {
    console.log("App: " + this.state.email);
    console.log("App: " + this.state.password);
    console.log("App: " + this.state.status);
    return (
      <div>
        <div>
          <Switch>
            <Route
              exact
              path="/login"
              render={props => (
                <LogInForm
                  {...props}
                  email={this.state.email}
                  password={this.state.password}
                  status={this.state.status}
                  onChange={(email, pass, status) =>
                    this.changeState(email, pass, status)
                  }
                />
              )}
            />
            <Route
              exact
              path="/register"
              render={props => (
                <Register
                  {...props}
                  email={this.state.email}
                  password={this.state.password}
                  status={this.state.status}
                  onChange={(email, pass, status) =>
                    this.changeState(email, pass, status)
                  }
                />
              )}
            />
            <Route path="/home" component={Home} />
          </Switch>
          <Navbar
            email={this.state.email}
            password={this.state.password}
            status={this.state.status}
          />
        </div>
      </div>
    );
  }
}

export default App;
