import React from "react";
import './form.css'
import useForm from './useForm.jsx'
import Validator from "./validator";

export const Login = ({showLogin, setShowLogin, setShowForgotPassword, setShowSignUp, formRef, closeForm}) => {
    const {handleSubmit, handleChange, values, errors} = useForm("Login", Validator)

    return (showLogin) ? (
        <form onSubmit={handleSubmit} className="popup-form"
            ref={formRef} onClick={closeForm}>
            <div className="auth-inner">
                <label 
                    class="close-btn" 
                    onClick={() => setShowLogin(false)}
                >&times;</label>

                <h3>Login</h3>

                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}/>
                    {errors.email && <p className="validator">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}/>
                    {errors.password && <p className="validator">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-block form-btn form-btn">Login</button>
                </div>
                
                <p>You don't have any account?
                    <label 
                        className="form-link form-para-link"
                        onClick={() => {
                            setShowLogin(false)
                            setShowSignUp(true)
                        }}
                    >Sign up now
                    </label>
                </p>    
                
                <label 
                    className = "form-link text-center" 
                    onClick={() => {
                        setShowLogin(false);
                        setShowForgotPassword(true);
                    }}
                >Forgot password?
                </label>
            </div>
        </form>
    ) : null;
}

export default Login;