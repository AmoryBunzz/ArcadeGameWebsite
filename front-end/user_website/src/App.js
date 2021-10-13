import React, { useState, useRef } from 'react';
import './Styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './Components/PageLayout/Header/nav-bar';
import HomePage from './Pages/HomePage/home-page';
import Login from './Components/Popup/Form/login';
import SignUp from './Components/Popup/Form/sign-up';
import ForgotPassword from './Components/Popup/Form/forgot-password';

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

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
          <NavBar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp}/>
        </div>
        
        <div className="App-main">
          <Switch>
            <Route path="/" component={HomePage}/>
          </Switch>
        </div>
          
        <Login 
          showLogin={showLogin} 
          setShowLogin={setShowLogin} 
          setShowForgotPassword={setShowForgotPassword} 
          setShowSignUp={setShowSignUp}
          formRef={formRef}
          closeForm={closeForm}
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
