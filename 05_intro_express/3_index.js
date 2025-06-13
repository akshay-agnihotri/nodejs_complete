const http = require("http");
const express = require("express");

const app = express();


// Middleware functions
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2: Processing request...");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = 3000;

// const httpServer = http.createServer(app);
// httpServer.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
