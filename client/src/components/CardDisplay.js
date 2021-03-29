import React from "react";
import { CardListItem } from "./List";
import API from "../utils/api";
const saveit = async () => {
  console.log("saveing ");
};
const handleSave = async (id, booksArray) => {
  const bookToBeSaved = booksArray.find((book) => book.id === id);

  const resp = await API.saveDbBook({
    _id: bookToBeSaved.id,
    title: bookToBeSaved.volumeInfo.title,
    authors: bookToBeSaved.volumeInfo.authors,
    description: bookToBeSaved.volumeInfo.description,
    image_link: bookToBeSaved.volumeInfo.imageLinks.thumbnail,
    link: bookToBeSaved.volumeInfo.infoLink,
  });
  console.log(resp);
};
function CardDisplay({ id, title, authors, link, image, description, Button, bookArray, showSave }) {
  return (
    <CardListItem>
      <div className="card" id={id} key={id}>
        <div className="card-body">
          <div className="img-container">
            <h5>{title}</h5>
            <h6>{authors}</h6>
            {/* <Button /> */}
            <a href={link}>
              <img alt={title} src={image} />
            </a>

            <p>{description}</p>

            <a href={link}>
              <button className="btn btn-primary mr-3">View Book</button>
            </a>

            {showSave ? (
              <button
                onClick={() => {
                  handleSave(id, bookArray);
                  // console.log(bookArray);
                }}
                className="btn btn-primary pl-3"
              >
                Save
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </CardListItem>
  );
}

export default CardDisplay;
