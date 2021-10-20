import React, { useState, useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Styles/App.css';
import './Assets/Font/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css';

import NavBar from './Components/PageLayout/Header/nav-bar';
import HomePage from './Pages/HomePage/home-page';
import UserAccount from './Pages/UserAccount/user-account';
import Login from './Components/Popup/Form/login';
import SignUp from './Components/Popup/Form/sign-up';
import ForgotPassword from './Components/Popup/Form/forgot-password';
import FriendList from './Components/PageComponents/FriendList/friend-list';
import AboutUs from './Components/PageLayout/Footer/about-us';


function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const [user, setUser] = useState(null)

  const formRef = useRef();
  const closeForm = e => {
    if (formRef.current === e.target){
        setShowLogin(false)
        setShowSignUp(false)
        setShowForgotPassword(false)
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <NavBar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} user={user}/>
        </div>
        
        
        <Switch>
          <div className="App-main">
            <Route path="/" component={HomePage}/>
          </div>
          <Route path="/user-account" render={(props) => <UserAccount {...props} />}></Route>
        </Switch>
        

        <div className="App-left-sidebar">
          <FriendList user={user}/>
        </div>

        <div className="App-footer">
          <AboutUs/>
        </div>
          
        <Login 
          showLogin={showLogin} 
          setShowLogin={setShowLogin} 
          setShowForgotPassword={setShowForgotPassword} 
          setShowSignUp={setShowSignUp}
          formRef={formRef}
          closeForm={closeForm}
          setUser={setUser}
        />

        <SignUp 
          showSignUp={showSignUp} 
          setShowSignUp={setShowSignUp}
          setShowLogin={setShowLogin}
          formRef={formRef}
          closeForm={closeForm}
        />
        
        <ForgotPassword 
          showForgotPassword={showForgotPassword} 
          setShowForgotPassword={setShowForgotPassword}
          formRef={formRef}
          closeForm={closeForm}
        />
      </div> 
    </BrowserRouter>
  );
}

export default App;
