import React from "react";
import Conference from "../../components/conference/conference";
import Button from "../../components/buttons/genericButton";
import "./home.css";
import { Redirect } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.status === "") {
      return <Redirect to="/login" />;
    }
    return (
      <div className="content-allign">
        {!(this.props.status === "LISTENER") ? (
          <div className="button-div">
            {this.props.status === "CHAIR" ||
            this.props.status === "CO-CHAIR" ? (
              <Button
                className="btn btn-primary generic-button"
                text="Assign Rooms"
              />
            ) : null}
            <Button className="btn btn-primary generic-button" text="Bid" />
            <Button
              className="btn btn-primary generic-button"
              text="Review Paper"
            />
            <Button
              className="btn btn-primary generic-button"
              text="Upload Abstract"
            />
            <Button
              className="btn btn-primary generic-button"
              text="Upload Paper"
            />
            {this.props.status === "CHAIR" ? (
              <Button
                className="btn btn-primary generic-button"
                text="Create Event"
              />
            ) : null}
          </div>
        ) : null}
        <div className="conference-div">
          <Conference />
          <Conference />
          <Conference />
        </div>
      </div>
    );
  }
}

export default Home;
