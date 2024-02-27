/*
  CS Outresch
  CSE280 Spring 2024
  JavaScript app file
*/

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(
  path.resolve(__dirname, "public")
));

function genHome(req, res) {
    res.render("index", {});
}

// Middleware to redirect to "/home"
app.use((req, res, next) => {
    if (req.originalUrl === "/") {
        res.redirect("/home");
    } else {
        next();
    }
});

app.get("/home", function(req, res) {
    genHome(req, res);
  });

// Local hosting for now
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});