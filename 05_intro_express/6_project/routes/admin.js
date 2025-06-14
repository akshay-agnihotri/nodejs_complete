const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("../utils/paths");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// app.use will execute for all requests to the /product path
// app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   //redirecting request to the root path
//   res.redirect("/");
// });
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  //redirecting request to the root path
  res.redirect("/");
});

module.exports = router;
