import React from "react";
import Register from "../pages/register/register";
import LogInForm from "../pages/login/login";
import Home from "../pages/home/Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import AssignRoomsPage from "./assign-rooms/assignRooms";
import BidPage from "./bid-page/bidPage";
import ReviewPage from "./review-page/reviewPage";
import UploadAbstractPage from "./upload-abstract/uploadAbstract";
import UploadPaperPage from "./upload-paper/uploadPaper";
import CreateEventPage from "./create-event/createEvent";
import AssignReviewerPage from "./assign-reviewer/assignReviewer"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: "CHAIR"
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

  renderRoute(path) {
    if (path === "/login") {
      return (
        <Route
          path={path}
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
      );
    } else if (path === "/register") {
      return (
        <Route
          path={path}
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
      );
    } else if (path === "/home") {
      return (
        <Route
          path={path}
          render={props => (
            <Home
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
      );
    } else if (path === "/assign_rooms") {
      return (
        <Route
          path={path}
          render={props => (
            <AssignRoomsPage
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
      );
    } else if (path === "/bid") {
      return (
        <Route
          path={path}
          render={props => (
            <BidPage
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
      );
    } else if (path === "/review_paper") {
      return (
        <Route
          path={path}
          render={props => (
            <ReviewPage
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
      );
    } else if (path === "/upload_abstract") {
      return (
        <Route
          path={path}
          render={props => (
            <UploadAbstractPage
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
      );
    } else if (path === "/upload_paper") {
      return (
        <Route
          path={path}
          render={props => (
            <UploadPaperPage
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
      );
    } else if (path === "/create_event") {
      return (
        <Route
          path={path}
          render={props => (
            <CreateEventPage
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
      );
    } else if (path === "/assign-reviewer") {
      return (
        <Route
          path={path}
          render={props => (
            <AssignReviewerPage
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
      );
    }
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
            logout={(email, pass, status) =>
              this.changeState(email, pass, status)
            }
          />
          <Switch>
            {this.renderRoute("/login")}
            {this.renderRoute("/register")}
            {this.renderRoute("/home")}
            {this.renderRoute("/assign_rooms")}
            {this.renderRoute("/bid")}
            {this.renderRoute("/review_paper")}
            {this.renderRoute("/upload_abstract")}
            {this.renderRoute("/upload_paper")}
            {this.renderRoute("/create_event")}
            {this.renderRoute("/assign_reviewer")}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
