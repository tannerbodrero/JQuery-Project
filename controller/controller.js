const db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/users", function(req, res) {
        db.User.find({}).then(function(users) {
            res.json(users);
        });
    });
    
    app.post("/users", function (req, res) {
        
        db.User.create({
            name: req.body.name,
            age: req.body.age
        })
        .then(user => res.json(user))
        .catch(err => res.status(422).json(err))
    });
};