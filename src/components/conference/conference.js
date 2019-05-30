import React from "react";
import Presentation from "./presentation";

class Conference extends React.Component {
  renderPresentation(key, pres) {
    return <Presentation key={key} room={key} body={pres} />;
  }

  displayItems() {
    let items = [];
    const keys = Object.keys(this.props.presentations);
    for (let i = 0; i < keys.length; i++) {
      items.push(
        this.renderPresentation(keys[i], this.props.presentations[keys[i]])
      );
    }
    return items;
  }

  render() {
    this.renderPresentation();
    return (
      <div className={this.props.className}>
        <h5 className="card-header">{this.props.eventName}</h5>
        <div className="card-body">
          <p className="card-text">
            {this.props.date} - Apply papers until {this.props.deadline.day}
            /{this.props.deadline.month}/{this.props.deadline.year}
          </p>
          <ul className="list-group list-group-flush">{this.displayItems()}</ul>
        </div>
      </div>
    );
  }
}

export default Conference;
