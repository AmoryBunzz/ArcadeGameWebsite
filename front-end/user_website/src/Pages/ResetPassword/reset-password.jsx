import React, { Component } from "react";
import './reset-password.css'

class ResetPassword extends Component {
    state = {}
    handleSubmit = e => {
        e.preventDefault();
    }; 

    render() { 
        return (
            <form onSubmit={this.handleSubmit} id="reset-password-form">
                <div className="auth-inner">
                    <h3>Reset Password</h3>

                    <div className="form-group">
                        <label className="form-label">New Password:</label>
                        <input type="password" className="form-control" placeholder="New password"
                            onChange={e => this.email = e.target.value}/>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Confirm New Password:</label>
                        <input type="password" className="form-control" placeholder="Confirm new password"
                            onChange={e => this.password = e.target.value}/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block">Reset Password</button>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default ResetPassword;