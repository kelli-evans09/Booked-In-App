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
    officers: [],
    arrestingAgencies: [],
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  searchByValues = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const search = {
    searchValue: this.state.searchValue
    };

    InmateManager.searchByValues(search).then(() =>
    this.props.history.push("/inmates")
    )
  };

//   componentDidMount() {
//       InmateManager.
//   }

  render() {
    return (
      <>
        <br />
        <br />
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
                placeholder="Search"
              />
              <br />
              <br />
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.searchByValues}
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

export default InmateSearchForm;
