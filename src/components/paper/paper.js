import React from "react";
import "./paper.css";

export default class Paper extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="card-header paper-header">
          {this.props.author} - 
          <div className="date-style">dd/mm/yyyy</div>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              What is Lorem Ipsum? Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer posuere erat a ante.What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </blockquote>
        </div>
      </div>
    );
  }
}
