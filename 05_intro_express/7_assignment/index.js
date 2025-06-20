const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "user.html"));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
