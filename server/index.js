import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "behrfw55esatfhw6a6r7-mysql.services.clever-cloud.com",
  user: "ueqynl9ndjo36h2a",
  password: "CsfKYM0c1hCvyRf3vTdA",
  database: "behrfw55esatfhw6a6r7",
});

app.get("/", (req, res) => {
  res.json("Hello world!");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM test1";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO test1 (`title`,`desc`,`cover`,`price`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successfully!");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM test1 WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully!");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const q =
    "UPDATE test1 SET `title` = ?,`desc` = ? , `cover` = ? , `price` = ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully!");
  });
});

app.listen(5000, () => {
  console.log("server is running!");
});
