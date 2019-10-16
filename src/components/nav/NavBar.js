import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import './NavBar.css'

class NavBar extends Component {

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
          </ul>
        </nav>
      </header>
    )
  }
}
export default NavBar;