const dbBookModel = require("../models");

module.exports = {
    //function for finding all books in db
          findAll: (req, res) => {
              dbBookModel.Book.find(req.query).then(book => res.json(book))
          },
    //function for finding by an id on the paramas
          create: (req,res) => {
              dbBookModel.Book.create(req.body).then(bookCreated => res.json(bookCreated))
          },

    //function for creating a new saved book in the cb
        findById: (req, res) =>{
            dbBookModel.Book.findById(req.params.id).then(book => res.json(book))
        },
    //function for updating a saved book
        update: (req,res) => {
            dbBookModel.Book.findOneAndUpdate({id: req.params.id}, req.body).then(bookUpdated => res.json(bookUpdated))
        },
    //function for removing a book from the db
        remove: (req,res) => {
            dbBookModel.Book.findById(req.params.id).then(book => book.remove()).then(bookRemoved => res.json(bookRemoved))
        }
  }           
