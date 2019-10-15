import React, { Component } from "react";
import InmateManager from "../modules/InmateManager";
// import EmployeeManager from "../../modules/EmployeeManager";
// import "./InmateForm.css"

class InmateEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    bookingNumber: "",
    arrestingAgency: "",
    dateIn: "",
    releasingOfficer: "",
    dateOut: "",
    comments: "",
    billed: "",
    archived: "",
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
      arrestingAgency: this.state.arrestingAgency,
      dateIn: this.state.dateIn,
      releasingOfficer: this.state.releasingOfficer,
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
      this.setState({
        name: inmate.name,
        bookingNumber: inmate.bookingNumber,
        arrestingAgency: inmate.arrestingAgency,
        dateIn: inmate.dateIn,
        releasingOfficer: inmate.releasingOfficer,
        dateOut: inmate.dateOut,
        comments: inmate.comments,
        billed: inmate.billed,
        archived: false,
        loadingStatus: false
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
