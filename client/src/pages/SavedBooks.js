import React, {Component} from 'react'
import {Link} from 'react-router-dom';



class SavedBooks extends Component {
    state = {
        books: [],
        search: "",
      };
    


    render(){
     
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="savedbooks">View Saved</Link>    
            </nav>
            
        )
    }
}

export default SavedBooks
