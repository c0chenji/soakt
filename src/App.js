import React,{ Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';

// import Login from './components/Login';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Login from './components/Login';
import MapResult from './components/MapResult';

class App extends Component {
    render() {
        return (
            <div className="App">            
                <NavBar/>
                <MainContent/>
                <Introduction/>
                <Login/>
                <MapResult/>
                <Footer/>          
            </div>
        
        )  
    }
}

export default App;