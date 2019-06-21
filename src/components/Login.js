import React, { Component } from 'react';
import './componentStyle/Login.css';
export default class Login extends Component {
    render() {
        return (
            <div className="login-content">
                <div className="login">
                    <label>login</label>
                    <input placeholder="email"></input>
                    <input placeholder="password"></input>
                    <span>forgot username password?
                      <li className="reset">reset here</li>
                    </span>
                    <div className="left-bottom-btn-group">
                    <button className="left-go-btn">GO>></button>
                    <button className="facebook-btn"><i className="fab fa-facebook-f"></i> login with Facebook</button>
                    <button className="google-btn"><i className="icons8-google"></i> login with Google</button></div>
                </div>
                <div className="create-save">
                    <label>create account & save time</label>
                    <div className="right-top-btn-group">
                    <button>SIGN UP WITH EMAIL</button>
                    <button className="facebook-btn"><i className="fab fa-facebook-f"></i> sign up with Facebook</button>
                    <button className="right-google-btn google-btn"><i className="icons8-google"></i> sign up with google</button>
                    </div>            
                </div>
            </div>
        )
    }
}
