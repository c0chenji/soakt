import React, { Component } from 'react'

class MainContent extends Component {
  render() {
    return (
      <div className="content-box">
        <p className="slogan">Let's get<br />
          you soakt
        </p>
        <hr></hr>
        <div className="search-title">Find and plan dive trips</div>
        <div className="search-section">
        
          <input placeholder="try Catalina Island,CA..." />
          <input placeholder="Fri 8/17                  <>" />

          <div className="dropdown-btn"><i className="fas fa-minus-circle"></i> 1 driver <i className="fas fa-plus-circle"></i></div>
          <div className="dropdown-btn">No Gear <i className="fa fa-caret-down"></i></div>
          <button>search</button>
        </div>

        <hr></hr>
        
        <div className="launch-section">
        <div className="launch-title">Not sure? Get your tailored recommendations</div>
          <button>launch wizard</button></div>
      </div>
    )
  }
}
export default MainContent