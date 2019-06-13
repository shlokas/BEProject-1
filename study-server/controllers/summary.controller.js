const User = require('../models/user.model');
var mongo = require('mongodb');
var conn = require('../dbConn');



// function getNextSequenceValue(db, name) {
//     db.collection("counters").findOneAndUpdate({ _id: name }, {}, { $inc: { seq: 1 } }, function (err, result) {
//         // if(err) callback(err, result);
//         // callback(err, result.value.seq);
//         console.log(err);
//         console.log(result);

//         if (err) {

//         } else {
//             return result.seq;
//         }
//     });
// }

exports.getSubjects = (req, res) => {
    var subject_code = req.body.subject_code;
    conn.collection('summaries').find().toArray(function (err, document) {
        if (err) {

        } else {
            console.log(document)
            res.send(document);
        }
    });
}
// exports.makeRequest = (req, res) => {

//     console.log(req.body);
//     // var oid = new mongo.ObjectID("5cbcfbe9831d5e09686cab70")
//     var obj = {
//         // _id: oid
//         email: req.body.email,
//         name: req.body.name,
//         startDate: req.body.startDate,
//         endDate: req.body.endDate,
//         startTime: req.body.starstTime,
//         endTime: req.body.endTime,
//         room: req.body.room,
//         reason: req.body.reason,
//         verification_level: 0,
//         branch: req.body.branch,
//         reasonForRejection: "",
//         requestTime: new Date()
//     };
//     conn.collection("request").insert(obj, function (err, result) {
//         if (err) {

//         } else {
//             res.send(obj);
//         }
//     })
//     // const abc = await getNextSequenceValue(conn, "productid");
//     // console.log(abc);
//     // res.json(abc)
// }



// exports.getAllUserRequests = (req, res) => {
//     console.log(req.body);
//     const obj = {
//         email: req.body.email
//         // verificationLevel: '0'
//     }
//     conn.collection('request').find(obj).toArray(function (err, document) {
//         if (err) {

//         } else {
//             console.log(document)
//             res.send(document);
//         }
//     });
// }


// exports.getAllActiveUserRequests = (req, res) => {
//     console.log(req.body);
//     const obj = {
//         email: req.body.email,
//         $or: [
//             { verificationLevel: 0 },
//             { verificationLevel: 1 }
//         ]
//         // verificationLevel: '0'
//     }

//     conn.collection('request').find(obj).toArray(function (err, document) {
//         if (err) {

//         } else {
//             console.log(document)
//             res.send(document);
//         }
//     });


// }


// exports.approvalByHOD = (req, res) => {
//     const email = req.body.email;
//     // const req_id = req.body.
//     const obj = {
//         _id: mongo.ObjectID(req.body._id)
//     }
//     const set = {
//         $set: {
//             verification_level: 1
//         }
//     }
//     conn.collection('request').updateOne(obj, set, function (err, document) {
//         console.log(err);
//         console.log(document);
//         res.send(document);
//     })
// }


// exports.approvalByVP = (req, res) => {
//     const email = req.body.email;
//     // const req_id = req.body.
//     const obj = {
//         _id: mongo.ObjectID(req.body._id)
//     }
//     const set = {
//         $set: {
//             verification_level: 2
//         }
//     }
//     conn.collection('request').updateOne(obj, set, function (err, document) {
//         console.log(err);
//         console.log(document);
//         res.send(document);
//     })
// }


// exports.rejectRequest = (req, res) => {
//     // const email = req.body.email;
//     // const req_id = req.body.
//     console.log(req.body)
//     const obj = {
//         _id: mongo.ObjectID(req.body._id)
//     }
//     const set = {
//         $set: {
//             verification_level: 3,
//             reasonForRejection: req.body.reason
//         }
//     }
//     conn.collection('request').updateOne(obj, set, function (err, document) {
//         // console.log(err);
//         // console.log(document);
//         res.send(document);
//     })
// }

// exports.HODrequests = (req, res) => {
//     const branch = req.body.branch;
//     console.log(req.body);
//     const obj = {
//         branch: branch,
//         verification_level: 0
//     }
//     conn.collection('request').find(obj).toArray(function (err, document) {
//         if (err) {

//         } else {
//             console.log(document)
//             res.send(document);
//         }
//     });
// }

// exports.VPRequests = (req, res) => {
//     // const branch = req.body.branch;
//     console.log(req.body);
//     const obj = {
//         // branch: branch,
//         verification_level: 1
//     }
//     conn.collection('request').find(obj).toArray(function (err, document) {
//         if (err) {

//         } else {
//             console.log(document)
//             res.send(document);
//         }
//     });
// }
