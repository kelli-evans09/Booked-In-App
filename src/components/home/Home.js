import React, { Component } from "react";
import './Home.css'
import MPD from "./MPD.jpg"

class Home extends Component {
  render() {
    return (
      <address className="mpd-info">
        <br />
        <h1>Middleport Police Department</h1>
        <h3>
          Address: 659 Pearl Street Middleport, OH 45760
          <br /> Phone: 740-992-6424
          <br /> Fax: 740-992-1017
          <br /> Established in 2012
          <br /> Max hold: 8 males, 8 females
        </h3>
        <img src={MPD} alt="MPD" />
      </address>


    );
  }
}

export default Home;
