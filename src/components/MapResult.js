import React, { Component } from 'react'
import './componentStyle/MapResult.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyFancyComponent from './MyFancyComponent';
export default class MapResult extends Component {
    constructor() {
        super();
        this.state = {

            driverNumber: 1,
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        return (
            <div className="map-section">
                <div className="search-bar">
                    <span className="search-input"> new search <i class="fas fa-search"></i></span>
                    <span className="w">W</span>
                </div>
              
                    <form className="filter-form">
                        <input placeholder="Catatlina Islands"></input>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                        <span>2 Driver <i className="fa fa-caret-down"></i></span>
                        <button>Filter</button>
                    </form>
              
                <div className="result-text">
                    <p>19 results from "catalina islands</p>
                    <p>list view <b>map view</b></p>
                    <p>sort by recommended</p>
                </div>
                <div className="list-and-map">
                    <div className="location-list">
                        <div className="list-box">
                            <p> <b>PCH Scuba</b>
                            </p>
                            <p>Agoura Hill,CA</p>
                            <p>$160</p>
                            <p><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> $$</p>
                        </div>
                        <div className="list-box">
                        <p><b>PCH Scuba</b>
                            </p>
                            <p>Agoura Hill,CA</p>
                            <p>$160</p>
                            <p><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> $$</p>
                        </div>
                        <div className="list-box">
                        <p><b>PCH Scuba</b>
                            </p>
                            <p>Agoura Hill,CA</p>
                            <p>$160</p>
                            <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"><i class="far fa-star"></i></i> $$</p>
                        </div>
                        <div className="list-box">
                        <p><b>PCH Scuba</b>
                            </p>
                            <p>Agoura Hill,CA</p>
                            <p>$160</p>
                            <p><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> $$</p>
                        </div>

                    </div>
                    <div className="map-box">
                        <MyFancyComponent/>
                    </div>
                </div>
            </div>
        )
    }
}
