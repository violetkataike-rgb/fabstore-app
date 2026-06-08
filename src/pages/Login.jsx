import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";


export default function Login(){
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    function handleChange(e){
        setFormData ({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        
        const storedUser = JSON.parse(
            localStorage.getItem("formData")
        );

        if (storedUser){
            alert ("No account found. Please sign up first.")
            return;
        }

        const navigate = useNavigate();
        

        if (
            storedUser.email === formData.email && 
            storedUser.password === formData.password
        ){
            alert("Login successful!");
            localStorage.setItem("isLoggedIn", "true")
            navigate("/products");
        } else 
            {alert("Invalid email or password")

        }
        
    }
    return(
        <div className="login">
            <Header/>
        <h1>Welcome Back!</h1>
        <form onSubmit={handleSubmit}>

            <input name="email" type="email" placeholder="Email" onChange={handleChange}></input>
            <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>

         <button type="submit">Login</button>
       </form>
        </div>
    )
}