export default function Validator(FormType, values){
    let errors = {}

    if (FormType === "SignUp"){
        // Full name
        if (!values.full_name.trim()){
            errors.full_name = "Please enter your name!"
        }

        // Email
        if (!values.email.trim()){
            errors.email = "Email is required!"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Email is not valid!"
        }

        // Password
        if (!values.password){
            errors.password = "Password is required!"
        }

        // Confirm password
        if (!values.confirm_password){
            errors.confirm_password = "Confirm password is required!"
        }
        else if (values.confirm_password !== values.password){
            errors.confirm_password = "Password not match!"
        }

        // Gender
        if (!values.gender){
            errors.gender = "Gender is required!"
        }
    }

    if (FormType === "Login"){
        // Email
        if (!values.email.trim()){
            errors.email = "Email is required!"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Email is not valid!"
        }

        // Password
        if (!values.password){
            errors.password = "Password is required!"
        }
    }

    if (FormType === "ForgotPassword"){
        // Email
        if (!values.email.trim()){
            errors.email = "Email is required!"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Email is not valid!"
        }
    }

    return errors;
}