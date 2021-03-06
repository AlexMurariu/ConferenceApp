import React from "react";
import Conference from "../../components/conference/conference";
import "./home.css";
import { Redirect, NavLink } from "react-router-dom";

class Home extends React.Component {
  renderNavLink(path, text) {
    return (
      <NavLink className="btn btn-primary generic-button" to={path}>
        {text}
      </NavLink>
    );
  }

  renderConference(conf) {
    const eventDate =
      conf.eventDate.day +
      "/" +
      conf.eventDate.month +
      "/" +
      conf.eventDate.year;
    return (
      <Conference
        key={conf.id}
        className="card myClass"
        eventName={conf.event_name}
        deadline={conf.app_deadline}
        date={eventDate}
        presentations={conf.itinerary}
      />
    );
  }

  displayItems() {
    let items = [];
    for (let i = 0; i < this.props.confs.length; i++) {
      items.push(this.renderConference(this.props.confs[i]));
    }
    return items;
  }

  render() {
    if (this.props.status === "") {
      return <Redirect to="/login" />;
    }
    return (
      <div className="content-allign">
        {this.props.status !== "" ? (
          !(this.props.status === "LISTENER") ? (
            <div className="button-div">
              {this.props.status === "CHAIR" || this.props.status === "CO-CHAIR"
                ? this.renderNavLink("/assign_rooms", "Assign rooms")
                : null}
              {this.renderNavLink("/bid", "Bid")}
              {this.props.status === "CHAIR" || this.props.status === "CO-CHAIR"
                ? this.renderNavLink("/assign_reviewer", "Assign reviewer")
                : null}
              {this.props.status === "REVIEWER" ||
              this.props.status === "CO-CHAIR" ||
              this.props.status === "CHAIR"
                ? this.renderNavLink("/review_paper", "Review paper")
                : null}
              {this.renderNavLink("/upload_abstract", "Upload abstract")}
              {this.renderNavLink("/upload_paper", "Upload paper")}
              {this.props.status === "CHAIR"
                ? this.renderNavLink("/create_event", "Create event")
                : null}
            </div>
          ) : null
        ) : null}
        <div className="conference-div">{this.displayItems()}</div>
      </div>
    );
  }
}

export default Home;
