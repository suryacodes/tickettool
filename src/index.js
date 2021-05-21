require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const error = require("./middleware/error");
const fileUpload = require("express-fileupload");

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

require("./db");

// Routes
require("./api")(app);

app.use(error);

app.server.listen(process.env.PORT || 5000, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

module.export = app;
