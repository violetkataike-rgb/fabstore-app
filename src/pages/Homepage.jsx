import { use } from "react"
import "./Homepage.css"
import { useNavigate } from "react-router-dom"

export default function Homepage(){
const navigate = useNavigate();

      return(
        <div className="homepage">
            <div className="hero">
                <h1>Welcome to FabStore</h1>
                <p>Enhance your beauty!</p>

                <button className="btn" 
                onClick={()=>navigate("/signup")}>
                    Get Started
                </button>

            </div>
        </div>
    )
}