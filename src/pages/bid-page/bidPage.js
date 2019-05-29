import React from "react";
import { Redirect } from "react-router-dom";

export default class BidPage extends React.Component {
  render() {
    if (!this.props.status) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
          
      </div>
    );
  }
}
