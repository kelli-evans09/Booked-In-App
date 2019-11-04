import React, { Component } from "react";
import { Link } from "react-router-dom";


class InmateCard extends Component {
  render() {
    return (
      <div className="card">
          {/* Card that displays for each inmate in the database */}
        <div className="card-content">
            <h1>{this.props.inmateProp.bookingNumber}</h1>
          <h3>
            Name:{" "}
            <span className="card-inmatename">{this.props.inmateProp.name}</span>
          </h3>
          <h3>Date In: {this.props.inmateProp.dateIn}</h3>

          <h3>Arresting Agency: {this.props.inmateProp.arrestingAgency.name}</h3>

          <Link to={`/inmates/${this.props.inmateProp.id}`}>
            <button>Details</button>
          </Link>
          <br/>
          <br/>
          <Link to={`/inmates/${this.props.inmateProp.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default InmateCard;
