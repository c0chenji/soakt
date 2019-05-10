import React, { Component } from 'react'

class MainContent extends Component {
  render() {
    return (
        <div>
        <h2 className="slogan">Let's get<br />
           you soakt
        </h2>
        <hr></hr>
        <div><h2>Find and plan dive trips</h2>
        <input/>
        <input/>
        <select>
            <option value="">1 driver</option>
        </select>
        <select>
            <option value="">No gear</option>
        </select>
        <button>search</button></div>
        
        <hr></hr>
        <div><h2>Not sure? Get your tailored recommendations</h2>
        <button>launch wizard</button></div>
        </div>
    )
  }
}
export default MainContent