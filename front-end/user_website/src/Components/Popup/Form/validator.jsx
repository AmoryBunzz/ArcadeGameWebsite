export default function Validator(FormType, values){
    let errors = {}
    
    if (FormType === 'Login' && values === "Wrong email or password!"){
        errors.Email = "Wrong email or password!"
    }
    else{
        if (FormType === "SignUp"){
            // Full name
            if (!values.Full_name.trim()){
                errors.Full_name = "Please enter your name!"
            }
    
            // Email
            if (!values.Email.trim()){
                errors.Email = "Email is required!"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)){
                errors.Email = "Email is not valid!"
            }
    
            // Password
            if (!values.Password){
                errors.Password = "Password is required!"
            }
    
            // Confirm password
            if (!values.Confirm_password){
                errors.Confirm_password = "Confirm password is required!"
            }
            else if (values.Confirm_password !== values.Password){
                errors.Confirm_password = "Password not match!"
            }
    
            // Gender
            if (!values.Gender){
                errors.Gender = "Gender is required!"
            }
        }
    
        if (FormType === "Login"){
            // Email
            if (!values.Email.trim()){
                errors.Email = "Email is required!"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)){
                errors.Email = "Email is not valid!"
            }
    
            // Password
            if (!values.Password){
                errors.Password = "Password is required!"
            }
        }
    
        if (FormType === "ForgotPassword"){
            // Email
            if (!values.Email.trim()){
                errors.Email = "Email is required!"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)){
                errors.Email = "Email is not valid!"
            }
        }
    }

    return errors;
}