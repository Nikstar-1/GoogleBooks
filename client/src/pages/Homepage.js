import React, { Component } from "react";
import API from "../utils/api";

class Homepage extends Component {
  state = {
    books: [],
    search: "",
  };

  getSearchedBooks = () => {
    API.getSearchedBooks(this.state.search).then((response) => console.log(response), this.setState({ books: response.data }));
  };

  getSearchedBooks();
}
