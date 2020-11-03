const express = require("express");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const app = express();

const db = mongojs(databaseUrl,);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("Develop/public"));


// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});