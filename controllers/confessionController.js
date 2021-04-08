const db = require("../models");

// Define methods for the confessionController
// This is for the user who is currently signed in
module.exports = {
    findAll: function (req, res) {
        db.Confession
        .find(req.query).sort({ date: -1 })
        .then(dbAllConfession => res.json(dbAllConfession))
        .catch(err => 
            res.status(422).json(err));
    },
    // Testing
    // ~~~~~~~~~~~~
    findAllByUsername: function (req, res) {
        console.log(req.body.username)
        db.Confession
        .find({ owner: "test" })
        .then(dbAllByUsername => res.json(dbAllByUsername))
        .catch(err => 
            res.status(422).json(err));
    },
    // ~~~~~~~~~~~~~~~
    findById: function (req, res) {
        db.Confession
        .findById(req.params.id)
        .then(dbOneConfession => res.json(dbOneConfession))
        .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Confession
        .create(req.body)
        .then(dbNewConfession => res.json(dbNewConfession))
        .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Confession
        .updateOne({ _id: req.params.id }, req.body)
        .then(dbUpdatedConfession => {
            console.log(dbUpdatedConfession)
            res.json(dbUpdatedConfession)
        })
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Confession
        .findById({ _id: req.params.id })
        .then(dbRemoveConfession => dbRemoveConfession.remove())
        .then(dbRemoveConfession => res.json(dbRemoveConfession))
        .catch(err => res.status(422).json(err));
    }
};
