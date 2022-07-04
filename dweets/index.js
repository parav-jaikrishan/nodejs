const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://admin-parav:Test123@cluster0.dflwu.mongodb.net/dweetsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const dweetSchema = new mongoose.Schema({
    dweet: {
        type: String,
        required: [true, "Please check your data entry, no content entered!"]
    },
    posted_by: {
        type: String,
        required: [true, "Please check your data entry, no username entered"]
    },
    posted_at: {
        type: Date,
        required: [true, "Please check your data entry, no date specified!"]
    },
    last_updated_at: {
        type: Date,
        required: [true, "Please check your data entry, no date specified!"]
    }
});

const Dweet = mongoose.model("Dweet", dweetSchema);