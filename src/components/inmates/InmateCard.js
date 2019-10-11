import React, { Component } from "react";
// import { Link } from "react-router-dom";

class InmateCard extends Component {
  render() {
    return (
      <div className="card">
          <h1>Inmate Card</h1>
        <div className="card-content">
          {/* <picture>
            <img src={this.props.inmateProp.image} alt="My Dog" />
          </picture> */}
            <p>Booking Number: {null}</p>
          {/* {this.props.inmateProp.bookingNumber} */}
          <p>
            Name:{" "}
            {/* <span className="card-inmatename">{this.props.inmateProp.name}</span> */}
          </p>
          <p>Date In: {null}</p>
          {/* {this.props.inmateProp.dateIn} */}
          <p>Arresting Agency: {null}</p>
          {/* {this.props.inmateProp.arrestingAgency} */}
          <p>Date Out: {null}</p>
          {/* {this.props.inmateProp.dateOut} */}
          <p>Officer: {null}</p>
          {/* {this.props.inmateProp.officer} */}
          <p>Comments: {null}</p>
          {/* {this.props.inmateProp.comments} */}
          <p>Billed: {null}</p>
          {/* {this.props.inmateProp.billed} */}
          {/* <Link to={`/inmates/${this.props.inmateProp.id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/inmates/${this.props.inmateProp.id}/edit`}>
            <button>Edit</button>
          </Link> */}
        </div>
      </div>
    );
  }
}

export default InmateCard;
