import React from "react";
import './form.css'
import useForm from './useForm'
import validator from './validator'

export const SignUp = ({showSignUp, setShowSignUp, setShowLogin, formRef, closeForm}) => {
    const {handleSubmit, handleChange, values, errors} = useForm("SignUp", validator)

    return (showSignUp) ? (
        <form onSubmit={handleSubmit} className="popup-form"
            ref={formRef} onClick={closeForm}>
            <div className="auth-inner">
                <div 
                    class="close-btn" 
                    onClick={() => setShowSignUp(false)}
                >&times;</div>

                <h3>Sign Up</h3>

                <div className="form-group">
                    <label className="form-label">Full Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Your Name"
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}/>
                    {errors.full_name && <p className="validator">{errors.full_name}</p>}
                </div>

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
                    <label className="form-label">Confirm Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Confirm password"
                        name="confirm_password"
                        value={values.confirm_password}
                        onChange={handleChange}/>
                    {errors.confirm_password && <p className="validator">{errors.confirm_password}</p>}
                </div>

                <div className="form-group">
                    <label className="form-radio-label">
                        Male
                        <input 
                            type="radio" 
                            className="form-radio-btn"
                            name="gender"
                            checked={values.gender === "1"} 
                            value="1"
                            onChange={handleChange}/>
                    </label>
                    <label className="form-radio-label">
                        Female
                        <input 
                            type="radio" 
                            className="form-radio-btn"
                            name="gender"
                            checked={values.gender === "0"}
                            value="0"
                            onChange={handleChange}/>
                    </label>
                    {errors.gender && <p className="validator">{errors.gender}</p>}
                </div>
                
                <div className="form-group">
                    <button 
                        className="btn btn-primary btn-block form-btn"
                        >Sign Up
                    </button>
                </div>

                <p>Already have account?
                    <label 
                        className="form-link form-para-link"
                        onClick={() => {
                            setShowLogin(true)
                            setShowSignUp(false)
                        }}
                    >Login now
                    </label>
                </p>     
            </div>
        </form>
    ) : null;
}
 
export default SignUp;