const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: path.join(__dirname, "public") });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("contact-me.html", { root: path.join(__dirname, "public") });
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.use(function (req, res, next) {
  res
    .status(404)
    .sendFile("404.html", { root: path.join(__dirname, "public") });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
