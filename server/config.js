module.exports = {
  ca: "/path/to/ca.pem",
  key: "/path/to/client-key.pem",
  cert: "/path/to/client-cert.pem",
};

const fs = require("fs");
const sslConfig = require("./config"); // Adjust the path as needed

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1 ",
  user: "sqluser",
  password: "password",
  database: "test1",
  port: 3306,
  ssl: {
    ca: fs.readFileSync(sslConfig.ca),
    key: fs.readFileSync(sslConfig.key),
    cert: fs.readFileSync(sslConfig.cert),
  },
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL with SSL");
});
