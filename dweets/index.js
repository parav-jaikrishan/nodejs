const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://admin-parav:Test123@cluster0.dflwu.mongodb.net/dweetsDB", { useNewUrlParser: true, useUnifiedTopology: true });
console.log("Connected to DB");