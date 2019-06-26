var conn = require('../dbConn');
var ObjectId = require('mongodb').ObjectID;

exports.getUsersForGroup = (req, res) => {
    conn.collection('users').find().toArray(function (err, document) {
        if (err) {

        } else {
            console.log(document);
            res.send(document);
        }
    });
}

exports.createGroup = (req, res) => {
    const admin = req.body.admin;
    const members = req.body.members;
    // const memArray = members.toString().split(",");
    const ts = Date.now();
    // console.log(memArray)
    const name = req.body.name;
    const obj = {
        admin: admin,
        members: members,
        name: name,
        questions: [],
        created: ts
    }
    conn.collection("groups").insertOne(obj, function (err, result) {
        if (err) {

        } else {
            res.send(obj);
        }
    })
}

exports.addMembers = (req, res) => {
    const groupID = req.body._id;
    console.log(groupID)
    const newMembers = req.body.newMembers;
    const existing = {
        _id: ObjectId(groupID)
    };
    console.log(existing)
    const obj = {
        $set: {
            members: newMembers
        }
    }
    conn.collection("groups").updateOne(existing, obj, function (err, result) {
        if (err) {

        } else {
            res.send(result);
        }
    })
    // conn.collection('groups').findOne(existing, function (err, document) {
    //     if (err) {

    //     } else {
    //         console.log(document);
    //         res.send(document);
    //     }
    // });
}
