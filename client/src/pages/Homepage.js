import React, { Component } from "react";
import API from "../utils/api";


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
      this.setState({...this.state, search: book});
  
    }
  getSearchedBooks = () => {
    console.log(this.state)
    API.getSearchedBooks(this.state.search).then((response) => this.setState({ books: response.data.items, search: "" }));
   };

  render() {
    return (
      <div className="card mb-3">
        <nav>
          <Link to="/">Home</Link>
          <Link to="savedbooks">View Saved</Link>
        </nav>
        <input
          type="text" onChange={this.handleChange}
          className="form-control mt-10"
           placeholder="Search for books"
          autoComplete="off"
          
           />
         <button onClick={this.getSearchedBooks} type="submit" className="btn btn-info">Search</button>

        {this.state.books.map(book => (
         <a href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
          </a>
        )
         )}
    
      </div>
    );
  }
}
export default Homepage;
