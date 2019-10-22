import React, { Component } from "react";
import InmateManager from "../modules/InmateManager";
import OfficerManager from "../modules/OfficerManager";
import ArrestingAgencyManager from "../modules/ArrestingAgencyManager";
import "../inmates/InmateForm.css";

class InmateForm extends Component {
  state = {
    name: "",
    bookingNumber: "",
    arrestingAgencyId: "",
    dateIn: "",
    officerId: "",
    dateOut: "",
    comments: "",
    billed: "",
    archived: false,
    officers: [],
    arrestingAgencies: [],
    inmates: [],
    loadingStatus: false
  };

  componentDidMount() {
    OfficerManager.getAll().then(parsedOfficers => {
      ArrestingAgencyManager.getAll().then(parsedArrestingAgencies => {
        InmateManager.getAll().then(parsedInmates => {
          this.setState({
            officers: parsedOfficers,
            arrestingAgencies: parsedArrestingAgencies,
            inmates: parsedInmates
          });
        });
      });
    });
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create inmate object, invoke the InmateManager post method, and redirect to the full inmate list
   */
  constructNewInmate = evt => {
    evt.preventDefault();
    if (
      this.state.name === "" ||
      this.state.bookingNumber === "" ||
      this.state.arrestingAgencyId === "" ||
      this.state.dateIn === ""
    ) {
      window.alert(
        "Please input inmate name, booking number, arresting agency and intake date"
      );
    } else
      // booking number value === existing booking number from database
      InmateManager.searchByValues(this.state.bookingNumber).then(
        searchBookingNumbers => {
          if (searchBookingNumbers[0] !== undefined) {
            window.alert("That booking number already exists!");
          } else {
            this.setState({ loadingStatus: true });
            const inmate = {
              name: this.state.name,
              bookingNumber: this.state.bookingNumber,
              arrestingAgencyId: this.state.arrestingAgencyId,
              dateIn: this.state.dateIn,
              officerId: this.state.officerId,
              dateOut: this.state.dateOut,
              comments: this.state.comments,
              billed: this.state.billed,
              archived: false

              //change to a number use + before "this.state"
            };

            // Create the inmate and redirect user to inmate list
            InmateManager.post(inmate).then(() =>
              this.props.history.push("/inmates")
            );
          }
        }
      );
  };

  render() {
    return (
      <>
        <br />
        <br />
        <form>
          <fieldset className="formgrid">
            <br />
            <br />
            <div>
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
                placeholder="Ex: 00-000"
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
                  <option
                    key={arrestingAgency.id.name}
                    value={arrestingAgency.id.name}
                  >
                    {arrestingAgency.name}
                  </option>
                ))}
              </select>
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
              {/* Officer ID dropdown menu goes here */}
              <label htmlFor="officerId">Releasing Officer </label>
              <select
                className="form-control"
                id="officerId"
                value={this.state.officerId}
                onChange={this.handleFieldChange}
              >
                {this.state.officers.map(officer => (
                  <option key={officer.id} value={officer.id.name}>
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
                onClick={this.constructNewInmate}
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

export default InmateForm;
