import React, { Component } from "react";
import API from "../utils/api";
import CardDisplay from "../components/CardDisplay";
import { Link } from "react-router-dom";
import { List } from "../components/List";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: "",
    };
  }

  handleChange = (event) => {
    const book = event.target.value;
    this.setState({ ...this.state, search: book });
  };
  getSearchedBooks = async () => {
    const SearchedBooks = await API.getSearchedBooks(this.state.search);
    console.log(SearchedBooks);
    this.setState({ books: SearchedBooks.data.items });
    return true;
  };
  handleSave = async (id, booksArray) => {
    const bookToBeSaved = this.state.books.find((book) => book.id === id);

    await API.saveDbBook({
      _id: bookToBeSaved.id,
      title: bookToBeSaved.volumeInfo.title,
      authors: bookToBeSaved.volumeInfo.authors,
      description: bookToBeSaved.volumeInfo.description,
      image: bookToBeSaved.volumeInfo.imageLinks.thumbnail,
      link: bookToBeSaved.volumeInfo.infoLink,
    });
  };

  render() {
    return (
      <div className="container">
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="savedbooks">View Saved</Link>
        </nav> */}
        <div className="input-group mb-3 w-50 text-center">
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control"
            placeholder="Search for books"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button 
            onClick={this.getSearchedBooks} 
            type="submit" 
            className="input-group-text"
            >
              Search
            </button>
          </div>
        </div>

        {this.state.books.length ? (
          <List>
            {this.state.books.map((book, i, array) => {
              return (
                <CardDisplay
                  id={book.id}
                  key={book.id}
                  title={book.volumeInfo.title}
                  description={book.volumeInfo.description}
                  image={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"
                  }
                  // image={(function () {
                  //   let image = book.volumeInfo.imageLinks.thumbnail;
                  //   return image;
                  // })()}
                  link={book.volumeInfo.infoLink}
                  bookArray={array}
                  showSave={true}
                  // Button={() => {
                  //   <button onClick={() => this.handleSave(book.id)}>Save Book</button>;
                  // }}
                />
              );
            })}
          </List>
        ) : (
          <h3>Enter a book, and save for later!</h3>
        )}
      </div>
    );
  }
}
export default Homepage;
