import React from "react";
import "./conference.css";

class Conference extends React.Component {
    render() {
        return (
            <div className="card myClass">
                <h5 className="card-header">Event Name</h5>
                <div className="card-body">
                    <p className="card-text">dd/mm/yyyy</p>
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
