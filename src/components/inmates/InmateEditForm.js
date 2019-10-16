import React, { Component } from "react";
import InmateManager from "../modules/InmateManager";
import OfficerManager from "../modules/OfficerManager";
import ArrestingAgencyManager from "../modules/ArrestingAgencyManager"
// import "./InmateForm.css"

class InmateEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    bookingNumber: "",
    arrestingAgencyId: "",
    dateIn: "",
    officerId: "",
    dateOut: "",
    comments: "",
    billed: "",
    archived: "",
    officers: [],
    arrestingAgencies: [],
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingInmate = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedInmate = {
      id: this.props.match.params.inmateId,
      name: this.state.name,
      bookingNumber: this.state.bookingNumber,
      arrestingAgencyId: this.state.arrestingAgencyId,
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

  componentDidMount() {
    InmateManager.getOne(this.props.match.params.inmateId).then(inmate => {
      OfficerManager.getAll().then(parsedOfficers => {
        ArrestingAgencyManager.getAll().then(parsedArrestingAgencies => {
      this.setState({
        name: inmate.name,
        bookingNumber: inmate.bookingNumber,
        arrestingAgencyId: inmate.arrestingAgencyId,
        dateIn: inmate.dateIn,
        officerId: inmate.officerId,
        dateOut: inmate.dateOut,
        comments: inmate.comments,
        billed: inmate.billed,
        archived: false,
        officers: parsedOfficers,
        arrestingAgencies: parsedArrestingAgencies,
        loadingStatus: false
      });
      });
    });
  });
  }

  render() {
    return (
      <>
      <br />
      <br />
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                // The following id has to match EXACTLY to the parameter in state in order to work
                id="name"
                value={this.state.name}
              />
              <br />
              <br />
              <label htmlFor="bookingNumber">Booking Number </label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="bookingNumber"
                value={this.state.bookingNumber}
              />
              <br />
              <br />
              {/* This will change to a <select> tab */}
              <label htmlFor="arrestingAgencyId">Arresting Agency </label>
              <select
                className="form-control"
                id="arrestingAgencyId"
                value={this.state.arrestingAgencyId}
                onChange={this.handleFieldChange}
              >
                {this.state.arrestingAgencies.map(arrestingAgency => (
                  <option key={arrestingAgency.id.name} value={arrestingAgency.id.name}>
                    {arrestingAgency.name}
                  </option>
                ))}
              </select>
              {/* <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="arrestingAgencyId"
                value={this.state.arrestingAgencyId}
              /> */}
              <br />
              <br />
              <label htmlFor="dateIn">Intake Date </label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="dateIn"
                value={this.state.dateIn}
              />
              <br />
              <br />
              {/* Officer ID dropdown menu goes here*/}
              <label htmlFor="officerId">Releasing Officer </label>
              {/* <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="officerId"
                value={this.state.officerId}
              /> */}
              <select
                className="form-control"
                id="officerId"
                value={this.state.officerId}
                onChange={this.handleFieldChange}
              >
                {this.state.officers.map(officer => (
                  <option key={officer.id.name} value={officer.id.name}>
                    {officer.name}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <label htmlFor="dateOut">Release Date </label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="dateOut"
                value={this.state.dateOut}
              />
              <br />
              <br />
              <label htmlFor="comments">Release Comments </label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="comments"
                value={this.state.comments}
              />
              <br />
              <br />
              {/* This will change to a <select> tab */}
              <label htmlFor="billed">Billed </label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="billed"
                value={this.state.billed}
              />
              <br />
              <br />
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingInmate}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default InmateEditForm;
