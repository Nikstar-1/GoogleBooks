import React, {Component} from "react"; 
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <nav>
                <Link to="searcforbooks">Home</Link>
                <Link to="savedbooks">View Saved</Link>
            </nav>
        )
    }
}

export default Navbar