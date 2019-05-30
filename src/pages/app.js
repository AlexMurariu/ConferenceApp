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
import AssignReviewerPage from "./assign-reviewer/assignReviewer";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      status: "CHAIR",
      confsList: []
    };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080//conferences/get").then(res => {
      this.setState({
        confsList: res.data
      });
    });
  }

  changeState(id, email, pass, status) {
    this.setState({
      id: id,
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              confs={this.state.confsList}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              confs={this.state.confsList}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              confs={this.state.confsList}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
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
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
              }
            />
          )}
        />
      );
    } else if (path === "/assign_reviewer") {
      return (
        <Route
          path={path}
          render={props => (
            <AssignReviewerPage
              {...props}
              id={this.state.id}
              email={this.state.email}
              password={this.state.password}
              status={this.state.status}
              onChange={(id, email, pass, status) =>
                this.changeState(id, email, pass, status)
              }
            />
          )}
        />
      );
    }
  }

  render() {
    console.log("App: " + this.state.id);
    console.log("App: " + this.state.email);
    console.log("App: " + this.state.password);
    console.log("App: " + this.state.status);
    console.log(this.state.confsList);
    return (
      <div>
        <div>
          <Navbar
            id={this.state.id}
            email={this.state.email}
            password={this.state.password}
            status={this.state.status}
            logout={(id, email, pass, status) =>
              this.changeState(id, email, pass, status)
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
