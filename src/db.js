const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) throw err;

  setTimeout(function () {
    connection.ping();
    console.log("Pinged db");
  }, 3600000);

  console.log("DB Connected!");
});

module.exports = connection.promise();
