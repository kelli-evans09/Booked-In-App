import React, { Component } from "react";
import InmateManager from "../modules/InmateManager";
// import { Link } from "react-router-dom";

class InmateDetail extends Component {
  state = {
    name: "",
    bookingNumber: "",
    arrestingAgency: "",
    dateIn: "",
    officerId: "",
    dateOut: "",
    comments: "",
    billed: "",
    archived: "",
    officers: [],
    loadingStatus: true
  };

  handleDelete = () => {
    //invoke the delete function in InmateManger and re-direct to the Inmate list.
    this.setState({ loadingStatus: true });
    InmateManager.softDelete(this.props.inmateId).then(() =>
      this.props.history.push("/inmates")
    );
  };

  componentDidMount() {
    // console.log("InmateDetail: ComponentDidMount");
    //get(id) from InmateManager and hang on to that data; put it into state
    InmateManager.getOne(this.props.inmateId).then(inmate => {
      this.setState({
        name: inmate.name,
        bookingNumber: inmate.bookingNumber,
        arrestingAgency: inmate.arrestingAgency,
        dateIn: inmate.dateIn,
        officerId: inmate.officerId,
        dateOut: inmate.dateOut,
        comments: inmate.comments,
        billed: inmate.billed,
        archived: false,
        loadingStatus: false
      });
    });
  }

  updateExistingInmate = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedInmate = {
      id: this.props.match.params.inmateId,
      name: this.state.name,
      bookingNumber: this.state.bookingNumber,
      arrestingAgency: this.state.arrestingAgency,
      dateIn: this.state.dateIn,
      officerId: this.state.officerId,
      dateOut: this.state.dateOut,
      comments: this.state.comments,
      billed: this.state.billed,
      archived: false
    };

    InmateManager.update(editedInmate).then(() =>
      this.props.history.push("/inmates")
    );
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h1>Booking Number: {this.state.bookingNumber}</h1>
          <h3>
            Name:{" "}
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>

          <h3>Arresting Agency: {this.state.arrestingAgency}</h3>

          <h3>Date In: {this.state.dateIn}</h3>

          <h3>Releasing Officer: {this.state.officerId}</h3>

          <h3>Date Out: {this.state.dateOut}</h3>

          <h3>Comments: {this.state.comments}</h3>

          <h3>Billed: {this.state.billed}</h3>

          <div className="alignRight">
            <button
              type="button"
              disabled={this.state.loadingStatus}
              onClick={this.updateExistingInmate}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default InmateDetail;
