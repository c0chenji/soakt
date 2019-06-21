import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class MainContent extends Component {
  constructor() {
    super();
    this.state = {
       show: false,
       driverNumber:1,
       startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
}
addDriver(){
  this.setState({
    driverNumber:this.state.driverNumber+1
  })
}
removeDriver(){
  if(this.state.driverNumber!== 0){
    this.setState({
      driverNumber:this.state.driverNumber-1
    })
  }
 
}
dropdownShow() {
    this.setState({
        show: !this.state.show
    })
}
handleChange(date) {
  this.setState({
    startDate: date
  });
}
  render() {
    let dropdown_show= this.state.show?"gear-dropdown-show":"gear-dropdown-close";
    return (   
      <div className="content-box">
        <p className="slogan">Let's get<br />
          you soakt
        </p>
        <hr></hr>
        <span className="search-title">Find and plan dive trips</span>
          <form className="search-section">
          <input className="location" placeholder="try Catalina Island,CA..."/>
          <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
          <span className="dropdown-btn driver-num"><i onClick={this.removeDriver.bind(this)}className="fas fa-minus-circle"></i>{this.state.driverNumber} driver <i onClick={this.addDriver.bind(this)} className="fas fa-plus-circle"></i></span> 
          <span onClick={this.dropdownShow.bind(this)} className="dropdown-btn gear-selection">No Gear <i className="fa fa-caret-down"></i>
          <div className={dropdown_show}>
            <span> <input name="Gear"
            type="checkbox"
           /> Gear</span>
           <hr></hr>
            <span><input name="Gear"
            type="checkbox"
           />Tank</span>
            <span><input name="Gear"
            type="checkbox"
           />Weights</span>
            <span><input name="Gear"
            type="checkbox"
           />Other</span>
          </div>
          </span>
          <button className="search-btn">search</button>
          </form>
      
        <hr></hr>   
        <div className="launch-section">
        <span className="launch-title">Not sure? Get your tailored recommendations</span>
          <button className="launch-btn">launch wizard</button></div>
      </div>
    )
  }
}
export default MainContent