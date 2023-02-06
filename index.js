//boilerpate server
const express = require("express");
const db = require("./configuration/connection");
const routes = require("./routes");
const cwd = process.cwd();
//express
const PORT = process.env.PORT || 3001;
const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}!`);
  });
});