import React from "react";

class Presentation extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.body.name} - {this.props.body.speaker} from{" "}
        {this.props.body.schedule.start_hour} to{" "}
        {this.props.body.schedule.end_hour} in room {this.props.room}
      </li>
    );
  }
}

export default Presentation;
