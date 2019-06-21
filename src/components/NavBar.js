import React, { Component } from 'react';
import {BrowserRouter as Router,
    Route,
    Link,} from 'react-router-dom';
import './componentStyle/NavBar.css';
import Login from "./Login";
import BurgerMenu from './BurgerMenu';
import MainContent from './MainContent';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    toggleShow() {
        this.setState({
            show: !this.state.show
        })
    }
    // login(){
    //     return <Login/>;
    // }
    // home(){
    //     return <MainContent/>;
    // }
    
    render() {
        let overlay_show= this.state.show?"overlay-show":"overlay-close";
        
        return (       
            <div className="nav-container">
                <BurgerMenu show={overlay_show} />
                <Router>
                <ul className="nav-bar">
                    <li onClick={this.toggleShow.bind(this)}><i className="fas fa-bars"></i></li>
                    <li className=" "><Link to="/">Soakt</Link></li>
                    <li>
                        <Link to="/Login">Login</Link>
                     </li> 
                </ul>
                {/* <Route exact path="/" component={MainContent} />
                <Route path="/Login" component={Login} /> */}
               
                </Router>
                
            </div>
            
         
        )
    }
}
export default NavBar;
