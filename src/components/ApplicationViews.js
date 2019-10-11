import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import InmateCard from './inmates/InmateCard'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/inmates" render={(props) => {
          return <InmateCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews