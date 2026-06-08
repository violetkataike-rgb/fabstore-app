import { useState } from "react";
import "./signup.css"
import {useLocalStorage} from 'usehooks-ts'

 export default function Signup(){    
    // 1. State
// const [formData, setFormData] = useState({
//         firstName:"",
//         lastName:"",
//         phone:"",
//         email:"",
//         password:"",
//         confirmPassword:"",

//     });

    const [formData, setFormData] = useLocalStorage("formData", {
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        password:"",
        confirmPassword:"",

    } )
    // 2. Functions
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    };

    function handleSubmit(e){
        e.preventDefault();

        if (
            formData.password !== formData.confirmPassword
        ){
            alert("Passwords do not match!");
            return;
        }

        // localStorage.setItem(
        //     "user", JSON.stringify(formData)
        // ); 
        alert ("Signup successful!")
    
    }

   
    // 3.UI
    return(
        <div className="signup">
            <h1>FabStore</h1>
            <h1 className="h2">Create Account</h1>
            <div className="form">
            <form onSubmit={handleSubmit}>
    
               <input type="text" name="firstName" placeholder = "First Name" onChange={handleChange}></input>
               <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}></input>
               <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange}></input>
               <input type="email" name="email" placeholder="Email" onChange={handleChange}></input>
               <input type="password" name="password" placeholder="Password" onChange={handleChange}></input>
               <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}></input>
            
           
            <button type="submit">Signup</button>
             </form>
             </div>
            
        </div>
    )
}

