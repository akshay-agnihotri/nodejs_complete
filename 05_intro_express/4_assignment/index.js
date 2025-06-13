const express = require("express");

const app = express();

//create two middlewares such that the each request will funnel through these middlewares
//and then one response will be sent back to the client
// app.use((req, res, next) => {
//   console.log("Middleware 1: Request received");
//   next(); // Pass control to the next middleware
// });
// app.use((req, res, next) => {
//   console.log("Middleware 2: Processing request");
//   res.send("Response from the server"); // Send response to the client
// });

// Handle request to "/" and "/users" such that the each request has only one
// handler middleware that does something and then sends a response
app.use("/users", (req, res, next) => {
  console.log(`Request received for ${req.path}`);
  res.send("Response from /users endpoint");
});

app.use("/", (req, res, next) => {
  console.log(`Request received for ${req.path}`);
  res.send("Response from / endpoint");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
