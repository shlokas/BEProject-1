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
    const admin = ObjectId(req.body.admin);
    const memArray = req.body.members.toString().split(",");
    // const memArray = members.toString().split(",");
    var members = [];
    for(var i = 0 ; i <memArray.length;i++) {
        members.push(ObjectId(memArray[i]))
    }
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
            res.json("Successful");
        }
    })
}

exports.addMembers = (req, res) => {
    const groupID = req.body.groupID;
    console.log(groupID)
    const newMembers = req.body.newMembers;
    const memArray = newMembers.toString().split(",");

    const existing = {
        _id: ObjectId(groupID)
    };
    console.log(existing)
    const obj = {
        $set: {
            members: memArray
        }
    }
    conn.collection("groups").updateOne(existing, obj, function (err, result) {
        if (err) {

        } else {
            res.json("Successful");
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
            console.log(result)
            res.json("Successful");
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
            res.json("Successful");
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

exports.getGroups = (req, res) => {
    const userID = ObjectId(req.body.userID);
    const obj = {
        members: userID
    };
    conn.collection('groups').find(obj).toArray(function (err, document) {
        if (err) {

        } else {
            console.log(document);
            res.send(document);
        }
    });   
}

exports.getGroupDetails = (req, res) => {

}
// const post = {
//         $push: {
//             posts: {
//                 question: req.body.question,
//                 answers: []

//             }
//         }
//     }