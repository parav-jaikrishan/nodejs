const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
mongoose.connect("mongodb+srv://admin-parav:Test123@cluster0.dflwu.mongodb.net/dweetsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const dweetSchema = new mongoose.Schema({
    "dweet": {
        type: String,
        required: [true, "Please check your data entry, no content entered!"]
    },
    "posted_by": {
        type: String,
        required: [true, "Please check your data entry, no username entered"]
    },
    "posted_at": {
        type: Date,
        required: [true, "Please check your data entry, no date specified!"]
    },
    "last_updated_at": {
        type: Date,
        required: [true, "Please check your data entry, no date specified!"]
    }
});

const Dweet = mongoose.model("Dweet", dweetSchema);

app.get("/", (_req, res) => {
    res.send("Go to /dweet");
});

app.get("/dweet", (_req, res) => {
    Dweet.find((err, result) => {
        if(err)
            res.send(err);
        else
            res.send(result);
    })
});

app.route("/dweet/create")
    .get((_req, res) => {
        res.render("create");
    })
    .post((req, res) => {
        const newUsername = req.body.username;
        const newDweet = req.body.dweet;
        const newDate = new Date();
        const item = new Dweet({
            "dweet": newDweet,
            "posted_by": newUsername,
            "posted_at": newDate,
            "last_updated_at": newDate
        });
        item.save();
        res.send(`Sucessfully created new dweet`);
    });

app.route("/dweet/:id")
    .get((req, res) => {
        Dweet.findOne({ _id: req.params.id }, (err, result) => {
            if(err)
                console.log(err);
            else
                res.send(result);
        })
    })
    .delete((req, _res) => {
        Dweet.deleteOne({ _id: req.params.id }, err => {
            if(err)
                console.log(err);
        })
    })
    .post((req, _res) => {
        const newDweet = req.body.dweet;
        const newAuthor = req.body.author;
        const newDate = new Date();
        Dweet.findOneAndUpdate({ _id: req.params.id }, { "dweet": newDweet, "posted_by": newAuthor, "last_updated_at": newDate });
    });

app.get("/dweet/:id/delete", (req, res) => {
    Dweet.deleteOne({ _id: req.params.id }, err => {
        if(err)
            res.send(err);
        else
            res.send(`Sucessfuly deleted dweet with id: ${req.params.id}`)
    });
});

app.route("/dweet/:id/update")
    .get((req, res) => {
        Dweet.findOne({ _id: req.params.id }, (err, result) => {
            if(err)
                res.send(err);
            else
                res.render('update', { data: result });
        })
    })
    .post((req, res) => {
        const newDweet = req.body.dweet;
        const newAuthor = req.body.author;
        const newDate = new Date();
        Dweet.findOneAndUpdate({ _id: req.params.id }, { "dweet": newDweet, "posted_by": newAuthor, "last_updated_at": newDate }, () => {
            res.send(`Successfully updated dweet with id: ${req.params.id}`);
        })
    })

app.listen(port || 3000, () => console.log(`Server started at http://localhost:${port}/`));1