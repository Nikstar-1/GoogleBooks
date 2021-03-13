import React, { Component } from "react";
import API from "../utils/api";
import CardDisplay from "../components/CardDisplay";


// class Homepage extends Component {
//  state = {
//   books: [],
//    search: "",
// };

//getSearchedBooks = () => {
//  API.getSearchedBooks(this.state.search).then((response) => this.setState({ books: response.data }));
// };
//   render() {
//     return (
//       <div>
//           <h1>HEY</h1>
//         {/* <button onclick={this.getSearchedBooks}></button> */}
//       </div>
//     );
//   }
// }

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
    API.getSearchedBooks(this.state.search).then((response) => this.setState({ books: response.data.items, search: "" }));
  };

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
        
        <CardDisplay 
         id={book.volumeInfo.id} 
         key={book.volumeInfo.id} 
         title={book.volumeInfo.title} 
         description={book.volumeInfo.description} 
         image={book.volumeInfo.imageLinks.thumbnail} 
         link={book.volumeInfo.infoLink} 
         handleClick={this.handleBookClick}
      
        />
        {this.state.books.map((book, i) => {
          const key = i;
          return (
            <a href={book.volumeInfo.previewLink} key={key}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
            </a>
          );
        })}
      </div>
      
    );
  }
}
export default Homepage;
