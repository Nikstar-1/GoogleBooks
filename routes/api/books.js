const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Going to be responsible for finding all the books and adding new ones to the database
router.route("/")
   .get()
  .post();

//responsible for anything involving a book id - such as, finding by id, updating or removing
router
   .route("/:id")
   .get()
   .put()
   .delete();

module.exports = router;

