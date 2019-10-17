import React, { Component } from "react";
// import InmateCard from "./InmateCard";
import InmateManager from "../modules/InmateManager";

class InmateSearchForm extends Component {
  /*
          Add search form
        Search by: booking number, inmate name or arresting agency
        If search value ==== value from database
        Then show card for that inmate
        Or show list of inmates for that arresting agency
         */
  state = {
    searchValue: "",
    returnedInmates: [],
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  searchByValues = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const search = this.state.searchValue;

    InmateManager.searchByValues(search).then(returnedSearch => {
      this.setState({
        returnedInmates: returnedSearch,
        loadingStatus: false
      });
    });
  };

  //   componentDidMount() {
  //       InmateManager.
  //   }

  render() {
    return (
      <>
        <br />
        <br />
        <div>
          <h1 className="search-heading">Instructions for Searching</h1>
          <br />
          <div>
            <h3>Name Search:</h3>
            <p>
              Searches may be done by last name alone or by both first and last
              names. Searching by first and last name will narrow your results.
              <br />
              <br />
              Last name searches of ‘Brown’ will provide a list of offenders
              whose last name is Brown as well as those offenders whose last
              name begins with Brown, such as ‘Browning’, ‘Browner’, etc. It
              will also list offenders who are Brown Jr., Sr., III, etc.
            </p>
          </div>
          <br />
          <div>
            <h3>Arresting Agency Search:</h3>
            <p>
              Searches by Arresting Agency produce a list of those offenders who
              are being held or were held for that selected agency.
            </p>
          </div>
          <br />
          <div>
            <h3>Booking Number Search:</h3>
            <p>
              Searches by booking number should only be used if the offender
              booking number is known.
              <br />
              <br />
              Please note that all offender booking numbers are 5 digits
              starting with 2 digits to represent the year they were booked in
              followed by a dash "-" and their 3 digit booking number. For
              example, John Doe was booked in in the year 2019 with a booking
              number of 123, so his full booking number would be 19-123.
            </p>
          </div>
          <br />
          <br />
        </div>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="name">Search Database </label>
              <br />
              <br />
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                // The following id has to match EXACTLY to the parameter in state in order to work
                id="searchValue"
                placeholder="ex: John Doe, MPD, 19-123"
              />
              <br />
              <br />
            </div>
            <div className="alignRight">
              <button
                className="search-button"
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.searchByValues}
              >
                Submit
              </button>
              <br />
              <br />
              {this.state.returnedInmates.map(results => (
                <div key={results.id} value={results.id}>

                  <h2>{results.bookingNumber}</h2>
                  <p>Name: {results.name}</p>
                  <p>Arresting Agency: {results.arrestingAgencyId}</p>
                  <p>Date In: {results.dateIn}</p>
                  <p>Releasing Officer: {results.officerId}</p>
                  <p>Date Out: {results.dateOut}</p>
                  <p>Comments: {results.comments}</p>
                  <p>Billed: {results.billed}</p>

                </div>
              ))}
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default InmateSearchForm;
