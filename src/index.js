require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./config.json");
const error = require("./middleware/error");
const fileUpload = require("express-fileupload");
const db = require("./db");

let app = express();

app.server = http.createServer(app);

app.use(morgan("dev"));

// 3rd party middleware

app.use(cors("*"));

app.use(bodyParser.json());

app.use(
  fileUpload({
    useTempFiles: false,
  })
);

// Routes
require("./api")(app);

app.use(error);

app.server.listen(process.env.PORT || 5000, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

module.export = app;
