import React from 'react'
import { useState,useEffect } from 'react'
import { toast } from "react-toastify";
import instance from '../api/axios';
import { useNavigate } from 'react-router';
const useSignup = () => {
    const initialValues = { username: "", email: "", password: "",confirmPassword:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const[isSubmit,setSubmit]=useState(false);
    const[isLoading,setLoading]=useState(false);
        
    const navigate=useNavigate()
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

      const handleSubmit = (e) => {
        //!preventing refreshing the page when i submit the button
        e.preventDefault();
        setFormErrors(validate(formValues));   
        setSubmit(true)  
      };
      useEffect(()=>{
        postSignup();
      },[formErrors])
    

      const validate = (values) => {
  
        const error = {};
        const emailRegex = /^([A-Za-z]|[0-9])+$/;
    
        if (!values.username) {
          error.username = "Username cannot be blank";
        } else if (values.username.length < 3) {
          error.username = "User name cannot be less than 3 characters";
        }
        if (!values.email) {
          error.email = "Email address cannot be blank";
        } else if (emailRegex.test(values.email)) {
          error.email = "Invalid Email address";
        }
        if (!values.password) {
          error.password = "Password cannot be blank";
        } else if (values.password.length < 3) {
          error.password = "Password should more than 3 characters";
          console.log("should have more than 3 charcter")
        } else if (values.password.length > 10) {
          error.password = "Password should not exceed more than 10 characters";
          console.log("less than 10")
        }
        if(!values.confirmPassword){
            error.confirmPassword="Confirm Password cannot be empty"
            console.log("error")
        }else if(values.confirmPassword!==values.password){
            console.log("not matching")
            error.confirmPassword="Password is not matching"
        }
    
        return error;
      };
      const postSignup = async () => {
        console.log(formErrors)
        try {
          if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("hey")
            setLoading(true)
          
            const data = await instance.post(
              "/signup",
              formValues
            );
            console.log("data");
            console.log(data);
            if(data.status===201){
           
              const email=formValues.email
              toast.success(`Otp has sent to ${email}`);
               navigate("/otp",{state:email})
             }
          }
        }  catch (error) {
          console.log(error);
          if(error.response){
            if(error.response.status===409){
              const message=error.response.data
              
              toast.error(message)
              setSubmit(false)
            }else if(error.response.status===500){
              toast.error("Internal Server Error")
              setSubmit(false)
            }
          }
        }finally{
          setLoading(false);
          setFormValues(initialValues);
        }
      };
    
     

  return ({formValues,formErrors,handleChange,handleSubmit,isLoading})
}

export default useSignup