import React from "react";

class Conference extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <h5 className="card-header">{this.props.eventName}</h5>
                <div className="card-body">
                    <p className="card-text">{this.props.date}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Itinerary item 1</li>
                        <li className="list-group-item">Itinerary item 2</li>
                        <li className="list-group-item">Itinerary item 3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Conference;
