import React, { Component } from "react";
import InmateCard from "./InmateCard";
import InmateManager from "../modules/InmateManager";

class InmateList extends Component {
  //define what this component needs to render
  state = {
    inmates: []
  };

  deleteInmate = id => {
    InmateManager.delete(id)
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
          inmates: parsedInmates
        });
      });
  };

  componentDidMount() {
    //getAll from InmateManager and hang on to that data; put it in state
    InmateManager.getAll().then(inmatesFromDatabase => {
      this.setState({
        inmates: inmatesFromDatabase
      });
    });
  }

  render() {
    return (
      <>
        {/* <div className="container-cards"> */}
        {this.state.inmates.map(singleInmate =>
          !singleInmate.archived ? (
            <div
              key={singleInmate.id}
              className={
                singleInmate.dateOut === undefined ? "card stringGreen" : "card stringRed"
              }
            >
              <InmateCard
                editInmateProp={this.editInmate}
                inmateProp={singleInmate}
              />
            </div>
          ) : null
        )}
      </>
    );
  }
}

export default InmateList;
