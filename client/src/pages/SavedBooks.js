import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import API from "../utils/api";
import CardDisplay from "../components/CardDisplay";
import List  from "../components/List";
class SavedBooks extends Component {
    state = {
        books: [],
      };
      async componentDidMount() {
        const allbooks = await (await API.getAllBooks()).data;
        this.setState({ books: allbooks });
        console.log(this.state.books);
      }
render() {
    return (
        <div>
        {this.state.books.length ? (
          <List>
            {this.state.books.map((book, i, array) => {
              return (
                <CardDisplay
                  id={book._id}
                  key={book._id}
                  title={book.title}
                  description={book.description}
                  image={book.image_link}
                  link={book.link}
                  bookArray={array}
                  showSave={false}
                  // Button={() => {
                  //   <button onClick={() => this.handleSave(book.id)}>Save Book</button>;
                  // }}
                />
              );
            })}
          </List>
        ) : (
          <h3>Enter a book</h3>
        )}
      </div>
    );
  }
}

export default SavedBooks

