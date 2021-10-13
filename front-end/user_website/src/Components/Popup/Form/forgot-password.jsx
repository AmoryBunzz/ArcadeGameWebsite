import React from "react";
import './form.css'
import useForm from './useForm.jsx'
import Validator from "./validator";

export const ForgotPassword = ({showForgotPassword, setShowForgotPassword, formRef, closeForm}) => {
    const {handleSubmit, handleChange, values, errors} = useForm("SignUp", Validator)

    return (showForgotPassword) ? (
        <form onSubmit={handleSubmit} className="popup-form"
            ref={formRef} onClick={closeForm}>
            <div className="auth-inner">
                <label 
                    class="close-btn" 
                    onClick={() => setShowForgotPassword(false)}
                >&times;</label>

                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input 
                        type="email"
                        className="form-control" 
                        placeholder="Your email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}/>
                    {errors.email && <p className="validator">{errors.email}</p>}
                </div>
                
                <div className="form-group">
                    <button className="btn btn-primary btn-block form-btn">Send Email</button>
                </div>
            </div>
        </form>
    ) : null;
}
 
export default ForgotPassword;