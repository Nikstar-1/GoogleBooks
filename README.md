## Project Name

Google Books Search


Full stack application

​

## Installation and Setup Instructions
If you'd like to view the app locally, you may clone down this repository. You will need node, npm, and MongoDB installed globally on your machine.

Installation:

npm install

To Start Server:

npm start

To Visit App:

localhost:3000

## Preview

!["Start Page"](GoogleBooks/client/src/images/books.png "Start page.")

!["Start Page"](GoogleBooks/client/src/images/books2.png "Start page.")

## How it works
Users are first directed to the Home page where they can search for any book. Book information is retrived via the publicly available Google Books API.

Upon searching for a book, users will see a list of relevant results. They can click save to save the book to the Saved page. In the back end, the book is saved to the Mongo database.

Users can save as many books as they want. If they then go to the Saved page, they'll not only see books that have been saved by them, but also previous visitor's saved books (it's basically a shared space of saved books).

In either the Home or Saved pages, a user can click on the View Book button. This will redirect them to the Google Books store page where they can either purchase or read a preview of the book.

If a user wants to remove a saved book from the list, they may click the Delete button to remove the book from the page. In the back end, this deletes the document from the Mongo database.



## Description
React-based Google Books Search app that displays books on user searches. Users can save them to review or purchase later.

Save button to save the book to the database.
View button to view the book on Google Books.

This project was bootstrapped with Create React App.

## Deployment
This App is deployed on Heroku: https://ancient-fjord-00190.herokuapp.com/

## Technologies used

MERN stack:


MongoDB

Express.js

React.js

Node.js


MVC design pattern: Model, View, Controller.

Author


Rekha Kumari | Nikstar-1