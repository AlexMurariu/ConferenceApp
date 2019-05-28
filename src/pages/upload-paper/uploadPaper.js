import React from "react";
import { Redirect } from "react-router-dom";

export default class UploadPaperPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.status) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT
        EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT
      </div>
    );
  }
}
