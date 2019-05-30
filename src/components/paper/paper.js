import React from "react";
import "./paper.css";

export default class Paper extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="card-header paper-header">
          <p>{this.props.paperName} by {this.props.author}.</p> 
          <p>Subject {this.props.paperSubject}</p>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0 paper-header">
            {this.props.abstractUrl ? <a href={this.props.abstractUrl} target="_blank">Abstract paper</a>  : null}
            {this.props.paperUrl ? <a href={this.props.paperUrl} target="_blank">Full paper</a> : null}
          </blockquote>
        </div>
      </div>
    );
  }
}
