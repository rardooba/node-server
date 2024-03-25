const express = require("express");
const mysql = require("mysql");
const port = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "comboss_db",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

connection.connect((err) => {
  if (err) return console.error(`Error connexion: ${err.stack}`);
  console.log("connexion succes to data base");
});
app.get("/", (req, res) => {

  const sql = 
  connection.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) throw err;
    res.status(200).json(rows)
  });

  connection.end()
})

// app.get("/", (req, res) => {
//   res.status(200).json({
//     id: 1,
//     username: "rardooba",
//     character: "A.K.I",
//     numberOfCombos: 20,
//     online: true,
//   });
// });

// const users = require("./routes/users");
// app.use("/users", users);

app.listen(port, () => {
  console.log("Server Online");
});
