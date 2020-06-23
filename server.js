const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controller/controller.js")(app)

mongoose.connect("mongodb://localhost/garagetraderdb", { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(PORT, function() {
    console.log("App listening on port:", PORT)
});