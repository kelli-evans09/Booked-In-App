import React, { Component } from "react";
import { Link } from "react-router-dom";

class InmateCard extends Component {
  render() {
    return (
      <div className="card">
          {/* <h1>Inmate Card</h1> */}
        <div className="card-content">
            <h1>Booking Number: {this.props.inmateProp.bookingNumber}</h1>
          <h3>
            Name:{" "}
            <span className="card-inmatename">{this.props.inmateProp.name}</span>
          </h3>
          <h3>Date In: {this.props.inmateProp.dateIn}</h3>

          <h3>Arresting Agency: {this.props.inmateProp.arrestingAgencyId}</h3>

          {/* <p>Date Out: {this.props.inmateProp.dateOut}</p>

          <p>Officer: {this.props.inmateProp.officerId}</p>

          <p>Comments: {this.props.inmateProp.comments}</p>

          <p>Billed: {this.props.inmateProp.billed}</p> */}

          <Link to={`/inmates/${this.props.inmateProp.id}`}>
            <button>Details</button>
          </Link>
          {/* <br/> */}
          <Link to={`/inmates/${this.props.inmateProp.id}/edit`}>
            <button>Edit</button>
          </Link>
          {/* <Link to={`/inmates/${this.props.inmateProp.id}/edit`}>
            <button>Edit</button>
          </Link> */}
        </div>
      </div>
    );
  }
}

export default InmateCard;
