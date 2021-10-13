import { useEffect, useState } from "react";
import axios from 'axios'

const useForm = (FormType, validator) => {
    const [values, setValues] = useState(() => {
        if (FormType === "Login"){
            return {
                email: "",
                password: ""
            }
        }
        if (FormType === "SignUp"){
            return {
                full_name: "",
                email: "",
                password: "",
                confirm_password: "",
                gender: ""
            }
        }

        if (FormType === "ForgotPassword"){
            return {
                email: ""
            }
        }
    })

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
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0){
            if (FormType === "Login"){
                axios.post('user/login', values).then(
                    res => console.log(res)
                ).catch(
                    err => console.log(err)
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
        }
    }, [errors, FormType, values])

    return { handleSubmit, handleChange, values , errors}
}

export default useForm;