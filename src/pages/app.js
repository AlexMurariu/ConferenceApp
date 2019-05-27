import React from "react";
import Register from "../pages/register/register";
import LogInForm from "../pages/login/login";
import Home from "../pages/home/Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import UploadAbstractBtn from "../components/buttons/uploadAbstract/uploadAbstract";
import ReviewBtn from "../components/buttons/reviewBtn/reviewBtn";
import BidBtn from "../components/buttons/bidBtn/bidBtn";
import AssignRoomBtn from "../components/buttons/assignRoomBtn/assignRoomBtn";

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
            <Navbar
                email={this.state.email}
                password={this.state.password}
                status={this.state.status}
            />
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
            <Route
                exact
                path="/home"

                onChange={(email, pass, status) =>
                    this.changeState("caca@caca.com", "caca", "Author")
                }

                {...this.props.status === "Author" &&
                    <div>
                        <UploadAbstractBtn/>
                        component={Home}
                    </div>
                }

                {...this.props.status === "Chair" &&
                    <div>
                        <ReviewBtn/>
                        <BidBtn/>
                        <AssignRoomBtn/>
                        component={Home}
                    </div>
                }

                {...this.props.status === "Listener" &&
                    <div>
                        component={Home}
                    </div>
                }
                component={Home}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
