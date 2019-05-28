import React from "react";
import Conference from "../../components/conference/conference";
import "./home.css";
import { Redirect, NavLink } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNavLink(path, text) {
    return (
      <NavLink className="btn btn-primary generic-button" to={path}>
        {text}
      </NavLink>
    );
  }

  render() {
    if (this.props.status === "") {
      return <Redirect to="/login" />;
    }
    return (
      <div className="content-allign">
        {!(this.props.status === "LISTENER") ? (
          <div className="button-div">
            {this.props.status === "CHAIR" || this.props.status === "CO-CHAIR"
              ? this.renderNavLink("/assign_rooms", "Assign rooms")
              : null}
            {this.renderNavLink("/bid", "Bid")}
            {this.renderNavLink("/assign_reviewer", "Assign reviewer")}
            {this.renderNavLink("/review_paper", "Review paper")}
            {this.renderNavLink("/upload_abstract", "Upload abstract")}
            {this.renderNavLink("/upload_paper", "Upload paper")}
            {this.props.status === "CHAIR"
              ? this.renderNavLink("/create_event", "Create event")
              : null}
          </div>
        ) : null}
        <div className="conference-div">
          <Conference className="card myClass" eventName="Event name" date="31/5/2019"/>
          <Conference className="card myClass" eventName="Event name" date="31/5/2019"/>
          <Conference className="card myClass" eventName="Event name" date="31/5/2019"/>
        </div>
      </div>
    );
  }
}

export default Home;
