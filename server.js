const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./server/node_modules/node_modules/.routes/");
const routes = require("./routes/api");
const cors = require("cors")
const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('client/build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
  // res.send("test")
  res.sendFile(path.join(__dirname, "client/build/",'index.html'));
});
app.use(routes);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.listen(PORT, function () {
  console.log("server listening on: http://localhost:" + PORT);
});
