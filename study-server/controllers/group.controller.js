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
    const groupID = req.body.groupID;
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

}

exports.addPost = (req, res) => {
    const groupID = ObjectId(req.body.groupID);
    const obj = {
        groupID: groupID,
        question: req.body.question,
        author: req.body.author,
        answers: []
    }
    conn.collection("posts").insertOne(obj, function (err, result) {
        if (err) {

        } else {
            res.send(result);
        }
    })
}


exports.addAnswer = (req, res) => {
    const questionID = ObjectId(req.body.questionID);
    const existing = {
        _id: questionID
    };
    const post = {
        $push: {
            answers: req.body.answer
        }
    }
    conn.collection("posts").updateOne(existing, post, function (err, result) {
        if (err) {

        } else {
            res.send(result);
        }
    })
}

exports.getPosts = (req, res) => {
    const groupID = ObjectId(req.body.groupID);
    const obj = {
        groupID: groupID
    };
    conn.collection('posts').find(obj).toArray(function (err, document) {
        if (err) {

        } else {
            console.log(document);
            res.send(document);
        }
    });   
}


// const post = {
//         $push: {
//             posts: {
//                 question: req.body.question,
//                 answers: []

//             }
//         }
//     }