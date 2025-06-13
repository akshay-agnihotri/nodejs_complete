const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", (req, res) => {
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
router.post("/product", (req, res, next) => {
  console.log(req.body);
  //redirecting request to the root path
  res.redirect("/");
});

module.exports = router;
