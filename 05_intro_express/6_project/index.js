const express = require("express");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "pageNotFound.html"));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
