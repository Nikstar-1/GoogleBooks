import React, { Component } from "react";
import API from "../utils/api";

// class Homepage extends Component {
// //   state = {
// //     books: [],
// //     search: "",
// //   };

// //   getSearchedBooks = () => {
// //     API.getSearchedBooks(this.state.search).then((response) => this.setState({ books: response.data }));
// //   };
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
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="savedbooks">View Saved</Link>
        </nav>

        <h1>HEY</h1>
        <button onclick={this.getSearchedBooks}></button>
      </div>
    );
  }
}
export default Homepage;
