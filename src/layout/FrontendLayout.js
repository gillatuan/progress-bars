import React, { Component } from "react"

class FrontendLayout extends Component {
  render() {
    const { children } = this.props

    return <div className="myApp">{children}</div>
  }
}

export default FrontendLayout
