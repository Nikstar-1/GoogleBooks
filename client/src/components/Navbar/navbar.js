import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import React, {Component} from "react"; 
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar fixed-top" style={{ backgroundColor: "#ADD8E6", marginBottom: "40px",  height: "50px" }}>
                <Link to="searchforbooks" style= {{color: "#00BFFF", fontSize: "25px", marginRight: "10px"}} >Home</Link>
                <Link to="savedbooks" style= {{color: "#00BFFF", fontSize: "25px"}}>View Saved</Link>
            </nav>
        )
    }
}

export default Navbar