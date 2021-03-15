const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Going to be responsible for finding all the books and adding new ones to the database
router.route("/")
   .get(booksController.findAll)
  .post(booksController.create);

//responsible for anything involving a book id - such as, finding by id, updating or removing
router
   .route("/:id")
   .get(booksController.findById)
   .put(booksController.update)
   .delete(booksController.remove);

module.exports = router;

