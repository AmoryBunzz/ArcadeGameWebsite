import React from "react";

import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavLink,
} from "reactstrap";

import './nav-bar.css'
import logo from '../../../Assets/Images/App/app-logo.png';
import vietnam_icon from '../../../Assets/Images/Icons/vietnam.png'
import bell_icon from '../../../Assets/Images/Icons/bell.png'
import avatar from '../../../Assets/Images/User/avatar1.jpg'

function NavBar({setShowLogin, setShowSignUp, user}) { 
    const [collapseOpen] = React.useState(false);

    let buttons;
    
    if (user){
        buttons = (
            <div className="nav-right-side collapse navbar-collapse">
                <Collapse navbar isOpen={collapseOpen}>
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={bell_icon} className="navbar-dropdown-mailbox" alt="Mailbox" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                    
                        </DropdownMenu>
                    </UncontrolledDropdown>
                
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={avatar} className="navbar-dropdown-avatar" alt="" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Profile</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Played games</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Friends</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Records</DropdownItem>
                            </NavLink>
                            <DropdownItem divider tag="li" />
                            <NavLink tag="li">
                                <DropdownItem 
                                    className="nav-item"
                                    onClick = {() => localStorage.clear}
                                >Log out</DropdownItem>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={vietnam_icon} className="navbar-dropdown-language" alt="Language" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Vietnamese</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">English</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Japanese</DropdownItem>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </div>
        )
    }
    else {
        buttons = (
            <div className="nav-right-side collapse navbar-collapse ">
                <Collapse navbar isOpen={collapseOpen}>
                    <button 
                        className="navbar-btn" 
                        name="showLogin"
                        onClick={() => setShowLogin(true)}
                        >Login
                    </button>

                    <button 
                        className="navbar-btn" 
                        name="showSignUp"
                        onClick={() => setShowSignUp(true)}
                        >Sign up
                    </button>
                    
                    <UncontrolledDropdown nav>
                        <DropdownToggle
                            caret
                            color="default"
                            nav
                            onClick={(e) => e.preventDefault()}
                        >
                            <div class="navbar-dropdown">
                                <img src={vietnam_icon} className="navbar-dropdown-language" alt="Language" />
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-navbar" right tag="ul">
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Vietnamese</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">English</DropdownItem>
                            </NavLink>
                            <NavLink tag="li">
                                <DropdownItem className="nav-item">Japanese</DropdownItem>
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </div>
        )
    }

    return (
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="nav-left-side">
                <a href="/">
                    <img src={logo} className="navbar-logo" alt="logo" />
                </a>
                <div className="navbar-search">
                    <input type="text" class="navbar-search-input" placeholder="Tìm kiếm game" />
                    <button class="navbar-search-btn">
                        <i class="fas fa-search navbar-search-btn-icon" alt="search" />
                    </button>
                </div>
            </div>
            {buttons}
        </nav>
    );
}

export default NavBar;