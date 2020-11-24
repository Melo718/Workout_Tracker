const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");


var PORT = process.env.PORT || 3030;

const app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// routes
app.use (require("./routes/Api"));
app.use (require("./routes/views"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});