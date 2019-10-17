import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom"
// import './NavBar.css'

class NavBar extends Component {

  handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("userId")
    sessionStorage.removeItem("userId")
    //redirects to login page
    this.props.history.push("/login")
  };


  render(){

    return (
      <header>
        <h1 className="site-title">Booked In<br />
          <small>Mony Wood, Jail Administrator</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/home">Home</Link></li>
            <li><Link className="nav-link" to="/inmates">Inmate List</Link></li>
            <li><Link className="nav-link" to="/inmates/new">Add New Inmate</Link></li>
            <li><Link className="nav-link" to="/inmates/search">Inmate Search</Link></li>
            <li><Link className="nav-link" to="/login" onClick={this.handleLogOut}>Log Out</Link></li>

          </ul>
        </nav>
      </header>
    )
  }
}
export default withRouter(NavBar);