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
      console.log(book)
      this.setState({...this.state, search: book});
  
    }
  getSearchedBooks = () => {
    console.log(this.state)
    API.getSearchedBooks(this.state.search).then((response) => this.setState({ books: response.data.items, search: "" }));
   };

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="savedbooks">View Saved</Link>
        </nav>

        <h1>HEY</h1>
        <input
          type="text" onChange={this.handleChange}
          
           placeholder="Search for books"
          autoComplete="off"
           />
        <button onClick={this.getSearchedBooks}></button>
        {this.state.books.map(book => (
         <a href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
          console.log(book)
          </a>
        )
         )}
    
      </div>
    );
  }
}
export default Homepage;
