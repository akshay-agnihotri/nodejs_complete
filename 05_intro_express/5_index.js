const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/add-product", (req, res) => {
  res.send(
    `<form action="/product" method="POST">
        <input type="text" name="product-name" placeholder="Product Name" required>
        <button type="submit">Create Product</button>
     </form>`
  );
});

// app.use will execute for all requests to the /product path
// app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   //redirecting request to the root path
//   res.redirect("/");
// });
app.post("/product", (req, res, next) => {
  console.log(req.body);
  //redirecting request to the root path
  res.redirect("/");
});


app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
