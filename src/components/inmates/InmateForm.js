import React, { Component } from "react";
import InmateManager from "../modules/InmateManager";

class InmateForm extends Component {
  state = {
    name: "",
    bookingNumber: "",
    arrestingAgency: "",
    dateIn: "",
    releasingOfficer: "",
    dateOut: "",
    comments: "",
    billed: "",
    archived: false,
    loadingStatus: false
  };

  // componentDidMount() {
  //   EmployeeManager.getAll().then(parsedEmployees => {
  //     this.setState({ employees: parsedEmployees});
  //   });
  // }

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
      this.state.arrestingAgency === "" ||
      this.state.dateIn === ""
    ) {
      window.alert(
        "Please input inmate name, booking number, arresting agency and intake date"
      );
    } else {
      this.setState({ loadingStatus: true });
      const inmate = {
        name: this.state.name,
        bookingNumber: this.state.bookingNumber,
        arrestingAgency: this.state.arrestingAgency,
        dateIn: this.state.dateIn,
        releasingOfficer: this.state.releasingOfficer,
        dateOut: this.state.dateOut,
        comments: this.state.comments,
        billed: this.state.billed,
        archived: false,

        //change to a number use + before "this.state"
      };

      // Create the inmate and redirect user to inmate list
      InmateManager.post(inmate).then(() =>
        this.props.history.push("/inmates")
      );
    }
  };

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
              <label htmlFor="arrestingAgency">Arresting Agency </label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="arrestingAgency"
                value={this.state.arrestingAgency}
              />
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
              {/* This will change to a <select> tab */}
              <label htmlFor="releasingOfficer">Releasing Officer </label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="releasingOfficer"
                value={this.state.releasingOfficer}
              />
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
              {/* <select
                className="form-control"
                id="releasingOfficer"
                value={this.state.releasingOfficer}
                onChange={this.handleFieldChange}
              >
                {this.state.officers.map(officer => (
                  <option key={officer.id} value={officer.id}>
                    {officer.name}
                  </option>
                ))}
              </select> */}
              {/* <select
                className="form-control"
                id="employeeId"
                value={this.state.employeeId}
                onChange={this.handleFieldChange}
              >
                {this.state.employees.map(employee => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select> */}
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
