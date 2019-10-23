import React, { Component } from "react";
// import { Link } from "react-router-dom";
import LoginManager from "../modules/LoginManager";
class Login extends Component {
  // Set initial state
  state = {
    username: "",
    password: "",
    remember: false
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  //Update Checkbox
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    //set State for remember
    this.setState({
      remember: value
    });
  };
  
  //handle Login function to retrieve username and password value and verify if they are in the database.
  handleLogin = e => {
    e.preventDefault();
    const usernameValue = this.state.username;
    const passwordValue = this.state.password;
    LoginManager.getUserbyUsername(usernameValue).then(user => {
      if (user[0] === undefined) {
        window.alert("Wrong username or password!");
      } else if (
        user[0].password === passwordValue &&
        user[0].username === usernameValue
      ) {
        //checkbox terinary statement
        if (this.state.remember === true) {
          localStorage.setItem("userId", user[0].id);
          sessionStorage.setItem("userId", user[0].id);
          this.props.history.push("/home");
        } else {
          localStorage.setItem("userId", user[0].id);
          //redirects to home page
          this.props.history.push("/inmates");
        }
      } else {
        //alerts if name and password are not in the database
        window.alert("Wrong username or password!");
      }
    });
  };

  render() {
    return (
      //Printed Form
      <form onSubmit={this.handleLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <label htmlFor="inputusername">Username</label>
            <div></div>
            <input
              onChange={this.handleFieldChange}
              type="username"
              id="username"
              placeholder="Username"
              required=""
              autoFocus=""
            />
            <div></div>
            <label htmlFor="inputPassword"> Password</label>
            <div></div>
            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
          </div>
          <div>
            Remember Me?
            <input
              onChange={this.handleInputChange}
              type="checkbox"
              id="remember"
            />
          </div>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
