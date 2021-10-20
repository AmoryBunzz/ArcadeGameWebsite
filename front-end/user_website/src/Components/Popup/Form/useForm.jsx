import { useState } from "react";
import axios from 'axios'

const useForm = (FormType, validator, setUser) => {

    const default_values = () => {
        if (FormType === "Login"){
            return {
                Email: "",
                Password: ""
            }
        }
        if (FormType === "SignUp"){
            return {
                Full_name: "",
                Email: "",
                Password: "",
                Confirm_password: "",
                Gender: ""
            }
        }

        if (FormType === "ForgotPassword"){
            return {
                Email: ""
            }
        }
    }

    const [values, setValues] = useState(default_values)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        
        setErrors(validator(FormType, values));

        if (Object.keys(errors).length === 0){
            if (FormType === "Login"){
                axios.post('user/login', values).then(
                    res => {
                        if (res.data.message === 'Authentication successful!'){
                            localStorage.setItem('token', res.data.token)
                            setUser(res.data.user)
                        }
                    }
                ).catch(
                    err => setErrors(validator(FormType, 'Wrong email or password!'))
                )  
            }
            if (FormType === "SignUp"){
                axios.post('user/sign-up', values).then(
                    res => console.log(res)
                ).catch(
                    err => console.log(err)
                )
            }
    
            if (FormType === "ForgotPassword"){
                axios.post('user/forgot-password', values).then(
                    res => console.log(res)
                ).catch(
                    err => console.log(err)
                )
            }
            setValues(default_values)
        }   
    }

    return { handleSubmit, handleChange, values , errors }
}

export default useForm;