const User = require('../models/user.model');

var conn = require('../dbConn');

exports.register = (req, res) => {

    console.log(req.body);

    let user =
    {
        name: req.body.name,
        email: req.body.email,
        pwd: req.body.pwd,
        level: 0
    };

    conn.collection('user').insertOne(user, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(user);
        }
    });

}

exports.login = (req, res) => {

    console.log(req.body);

    conn.collection('user').findOne({ email: req.body.email }, { _id: 0 }, function (err, document) {
        console.log(document);
        if (document) {

            if (document.pwd == req.body.pwd) {
                res.send(document);
            } else {
                res.json("Incorrect Password")
            }
        } else {
            res.json("Incorrect Email")
        }
    });

}


exports.getProfile = (req, res) => {

    console.log(req.body);

    conn.collection('user').findOne({ email: req.body.email }, { _id: 0 }, function (err, document) {
        console.log(document);
        if (document) {
            res.json(document)
        } else {
            res.json("Incorrect Email")
        }
    });

}