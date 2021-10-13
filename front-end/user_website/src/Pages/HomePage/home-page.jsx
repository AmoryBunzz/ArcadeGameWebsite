import React, { Component } from "react";
import './home-page.css'
import logo from '../../Assets/Images/App/app-logo.png';

class HomePage extends Component {
    state = {}
    render() { 
        return (
            <div>
                <h1>Welcome to Arcade Game</h1>
                <img src={logo} className="app-logo" alt="logo"/>
            </div>
        );
    }
}
 
export default HomePage;