import React, { Component } from "react";
// import InmateCard from "./InmateCard";
import InmateManager from "../modules/InmateManager";
import { Link } from "react-router-dom";

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
    const search = this.state.searchValue
    // .split("-")[0];

    InmateManager.searchByValues(search).then(returnedSearch => {
      this.setState({
        returnedInmates: returnedSearch,
        loadingStatus: false
      });
    });
  };

  render() {
    return (
      <>
        <br />
        <div>
          <h1 className="search-heading">Instructions for Searching</h1>
          <br />
          <div>
            <h2>Name Search:</h2>
            <h4>
              Searches may be done by last name alone or by both first and last
              names. Searching by first and last name will narrow your results.
              <br />
              <br />
              Last name searches of ‘Brown’ will provide a list of offenders
              whose last name is Brown as well as those offenders whose last
              name begins with Brown, such as ‘Browning’, ‘Browner’, etc. It
              will also list offenders who are Brown Jr., Sr., III, etc.
            </h4>
          </div>
          <br />
          <div>
            <h2>Arresting Agency Search:</h2>
            <h4>
              Searches by Arresting Agency produce a list of those offenders who
              are being held or were held for that selected agency.
            </h4>
          </div>
          <br />
          <div>
            <h2>Booking Number Search:</h2>
            <h4>
              Searches by booking number should only be used if the offender
              booking number is known.
              <br />
              <br />
              Please note that all offender booking numbers are 5 digits
              starting with 2 digits to represent the year they were booked in
              followed by a dash "-" and their 3 digit booking number. For
              example, John Doe was booked in in the year 2019 with a booking
              number of 123, so his full booking number would be 19-123.
            </h4>
            <h2>Be sure to include "-" when searching by booking number!</h2>
          </div>
          <br />
          <br />
        </div>
        <form>
          <fieldset className="formgrid">
            <div>
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
                Search
              </button>
            </div>
            <br />
            <br />
            {this.state.returnedInmates.map(results =>
              !results.archived ? (
                <div
                  className="search-results-card"
                  key={results.id}
                  value={results.id}
                >
                  <h2>{results.bookingNumber}</h2>
                  <p>Name: {results.name}</p>
                  <p>Arresting Agency: {results.arrestingAgencyId}</p>
                  <p>Date In: {results.dateIn}</p>
                  <p>Releasing Officer: {results.officerId}</p>
                  <p>Date Out: {results.dateOut}</p>
                  <p>Comments: {results.comments}</p>
                  <p>Billed: {results.billed}</p>

                  <Link to={`/inmates/${results.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                  <br />
                  <br />
                  <br />
                </div>
              ) : null
            )}
          </fieldset>
        </form>
      </>
    );
  }
}

export default InmateSearchForm;
