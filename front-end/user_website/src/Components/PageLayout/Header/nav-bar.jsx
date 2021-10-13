import React from "react";
import './nav-bar.css'
import logo from '../../../Assets/Images/App/app-logo.png';
import search_icon from '../../../Assets/Images/Icons/search.png';
import vietnam_icon from '../../../Assets/Images/Icons/vietnam.png'

function NavBar({setShowLogin, setShowSignUp}) { 
    return (
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="nav-left-side">
                <a href="/">
                    <img src={logo} className="navbar-logo" alt="logo" />
                </a>
                <div className="navbar-search">
                    <input type="text" class="navbar-search-input" placeholder="Tìm kiếm game" />
                    <button class="navbar-search-btn">
                        <img src={search_icon} class="navbar-search-btn-icon" alt="search" />
                    </button>
                </div>
            </div>
            <div className="nav-right-side collapse navbar-collapse ">
                <button 
                    class="navbar-btn" 
                    onClick={() => setShowLogin(true)}
                    >Login
                </button>

                <button 
                    className="navbar-btn" 
                    name="showSignUp"
                    onClick={() => setShowSignUp(true)}
                    >Sign up
                </button>
                
                <div class="navbar-language">
                    <a href="/" className="navbar-language-icon">
                        <img src={vietnam_icon} className="navbar-language-icon-vietnam" alt="" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;