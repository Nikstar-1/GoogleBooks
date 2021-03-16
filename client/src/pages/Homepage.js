import React, { Component } from "react";
import API from "../utils/api";
import CardDisplay from "../components/CardDisplay";
import { Link } from "react-router-dom";

class Homepage extends Component {
  state = {
    books: [],
    search: "",
  };
  handleChange = (event) => {
    const book = event.target.value;
    this.setState({ ...this.state, search: book });
  };
  getSearchedBooks = () => {
    console.log(this.state);
    API.getSearchedBooks(this.state.search).then((response) => this.setState({ books: response.data.items})).then (() => console.log(this.state.books));
  };
  handleSave = id => {
    const bookToBeSaved = this.state.books.find(book => book.id === id)

    API.saveDbBook({
      _id: bookToBeSaved.id,
      title: bookToBeSaved.volumeInfo.title,
      authors: bookToBeSaved.volumeInfo.authors,
      description: bookToBeSaved.volumeInfo.description,
      // image: bookToBeSaved.volumeInfo.imageLinks.thumbnail,
      link: bookToBeSaved.volumeInfo.infoLink,
    }).then(() => {return null})
  }
 
 
  render() {
    return (
      <div className="container-fluid">
        <nav>
          <Link to="/">Home</Link>
          <Link to="savedbooks">View Saved</Link>
        </nav>
        <input type="text" onChange={this.handleChange} className="form-control mt-10" placeholder="Search for books" autoComplete="off" />
        <button onClick={this.getSearchedBooks} type="submit" className="btn btn-info">
          Search
        </button>
       
        {this.state.books.map(book => {
          return(

            
            
            
            <CardDisplay 
            id={book.id} 
            key={book.id} 
            title={book.volumeInfo.title} 
            description={book.volumeInfo.description} 
            //image={book.volumeInfo.imageLinks.thumbnail} 
            link={book.volumeInfo.infoLink} 
            Button={() => {
              <button onClick={() => this.handleSave(book.id)}>Save Book</button>
            }}
            />
            )
        })},
              
            
            
          
        
      </div>
      
    );
      }
}
export default Homepage;
