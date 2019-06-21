import React, { Component } from 'react'
import './componentStyle/Introduction.css';
 class Introduction extends Component {
    render() {
        return (
            <div className="intro-container">
                <div className="intro-content">
                <h3>Dive booking made easy</h3>
                <h4><b>Discover, book dives, rent gear, connect, track.</b></h4>
                <p>At soakt we understand dive planning and we want to make it a
                   seamless and tailored experience so you get to enjoy your dive-
                   centric lifestyle and nurture your connection to the water. 
                </p>
                <p>Our all-inclusive platform, facilitates the booking and managing
                   of dive trips for all of you certified divers and connects you to
                   others in your vicinity.
                </p>
            <button className="intro-btn">LEARN MORE ABOUT SOAKT »</button>

                </div>

                
            </div>
        )
    }
}
export default Introduction