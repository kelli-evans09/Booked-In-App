import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import InmateForm from "./inmates/InmateForm";
import InmateDetail from "./inmates/InmateDetail";
import InmateEditForm from "./inmates/InmateEditForm";
import InmateList from "./inmates/InmateList";
import InmateSearchForm from "./inmates/InmateSearchForm";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("userId") !== null;

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/home"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/inmates"
          render={props => {
            if (this.isAuthenticated()) {
              return <InmateList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/inmates/new"
          render={props => {
            return this.isAuthenticated() ? (
              <InmateForm {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/inmates/search"
          render={props => {
            return this.isAuthenticated() ? (
              <InmateSearchForm {...props} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          exact
          path="/inmates/:inmateId(\d+)"
          render={props => {
            // Pass the inmateId to the InmateDetailComponent
            return this.isAuthenticated() ? (
              <InmateDetail
                {...props}
                inmateId={parseInt(props.match.params.inmateId)}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/inmates/:inmateId(\d+)/edit"
          render={props => {
            return <InmateEditForm {...props} />;
          }}
        />
        <Route
          exact
          path="/logout"
          render={props => {
            return <Logout {...props} />;
          }}
        />
        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
