import React, { Component } from "react";
import InmateManager from "../modules/InmateManager";
import OfficerManager from "../modules/OfficerManager";
// import { Link } from "react-router-dom";

class InmateDetail extends Component {
  state = {
    name: "",
    bookingNumber: "",
    arrestingAgencyId: 1,
    dateIn: "",
    officerId: null,
    dateOut: "",
    comments: "",
    billed: "",
    archived: "",
    loadingStatus: true
  };

  // Invoke the delete function in InmateManger and re-direct to the Inmate list.
  handleDelete = () => {
    this.setState({ loadingStatus: true });
    InmateManager.delete(this.props.inmateId).then(() =>
      this.props.history.push("/inmates")
    );
  };

  // Get(id) from InmateManager and hang on to that data; put it into state
  componentDidMount() {
    InmateManager.getOne(this.props.inmateId).then(inmate => {
      if (inmate.officerId !== null) {
        OfficerManager.getOne(inmate.officerId).then(officer => {
          this.setState({
            officer: officer.name
          });
        });
      }
      this.setState({
        name: inmate.name,
        bookingNumber: inmate.bookingNumber,
        arrestingAgency: inmate.arrestingAgency.name,
        dateIn: inmate.dateIn,
        dateOut: inmate.dateOut,
        comments: inmate.comments,
        billed: inmate.billed,
        archived: false,
        loadingStatus: false
      });
    });
  }

  // Set state to equal the user input values from Inmate Edit Form
  updateExistingInmate = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedInmate = {
      id: this.props.match.params.inmateId,
      name: this.state.name,
      bookingNumber: this.state.bookingNumber,
      arrestingAgencyId: +this.state.arrestingAgencyId,
      dateIn: this.state.dateIn,
      officerId: +this.state.officerId,
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
          <h1>{this.state.bookingNumber}</h1>
          <h3>
            Name:{" "}
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>

          <h3>Arresting Agency: {this.state.arrestingAgency}</h3>

          <h3>Date In: {this.state.dateIn}</h3>

          <h3>Releasing Officer: {this.state.officer}</h3>

          <h3>Date Out: {this.state.dateOut}</h3>

          <h3>Comments: {this.state.comments}</h3>

          <h3>Billed: {this.state.billed === true ? "Yes" : "No"}</h3>

          <div className="alignRight">
            <button
              type="button"
              disabled={this.state.loadingStatus}
              onClick={this.updateExistingInmate}
            >
              Back
            </button>
            <button
              type="button"
              disabled={this.state.loadingStatus}
              onClick={this.handleDelete}
            >
              Delete Entry
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default InmateDetail;
