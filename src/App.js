import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./css/App.css"

import ProgressBar from "./components/ProgressBar"

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProgressBar} history={history} />
        </Switch>
      </Router>
    )
  }
}

export default App
