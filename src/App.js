import React,{ Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <MainContent/>
            </div>
        
        )
     
    }
}

export default App;