import React from "react";
import { Redirect } from "react-router-dom";

export default class BidPage extends React.Component {
  constructor(props) {
    super(props);
  }
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
