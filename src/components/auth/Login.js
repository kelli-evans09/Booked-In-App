import React, { Component } from "react";

class Login extends Component {
  // Set initial state
  state = {
    email: "",
    password: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = e => {
    e.preventDefault();
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
      "credentials",
      JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    );
    this.props.history.push("/inmates");
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <label htmlFor="inputEmail">Email address</label>
            <input
              onChange={this.handleFieldChange}
              type="email"
              id="email"
              placeholder="Email address"
              required=""
              autoFocus=""
            />

            <label htmlFor="inputPassword">Password</label>
            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
          </div>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
