import React, { Component } from "react";
import InmateCard from "./InmateCard";
import InmateManager from "../modules/InmateManager";


class InmateList extends Component {
  //define what this component needs to render
  state = {
    inmates: []
  };

  deleteInmate = id => {
    InmateManager.softDelete(id)
      .then(InmateManager.getAll)
      .then(parsedInmates => {
        this.setState({
          inmates: parsedInmates
        });
      });
  };

  editInmate = id => {
    InmateManager.update(id)
    .then(InmateManager.getAll)
    .then(parsedInmates => {
      this.setState({
        inmates:parsedInmates
      });
    });
  }

  componentDidMount() {
    // console.log("INMATE LIST: ComponentDidMount");
    //getAll from InmateManager and hang on to that data; put it in state
    InmateManager.getAll().then(inmatesFromDatabase => {
      this.setState({
        inmates: inmatesFromDatabase
      });
    });
  }

  render() {
    // console.log("INMATE LIST: Render");

    return (
      <>
        <div className="container-cards">
          {this.state.inmates.map(singleInmate =>
            !singleInmate.archived ? (
              <InmateCard
                editInmateProp={this.editInmate}
                key={singleInmate.id}
                inmateProp={singleInmate}
              />
            ) : null
          )}
        </div>
      </>
    );
  }
}

export default InmateList;
