const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

const path = require("path");

router.use("/api/books", bookRoutes);
router.use("/api/google", googleRoutes);

// router.use("/",(req, res) => {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
//   });

module.exports = router;
