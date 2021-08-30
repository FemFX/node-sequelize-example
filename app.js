const express = require("express");
const bodyParser = require("body-parser");

require("./db");
require('./bootstrap')()
const app = express();

app.use(bodyParser.json());

app.listen(4000, () => {
  console.log(`Server started on port 4000`);
});
