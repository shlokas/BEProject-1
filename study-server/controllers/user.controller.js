var conn = require('../dbConn');

exports.getUserID = (req, res) => {
    const username = req.body.username;
    const obj = {
        username: username
    };
    conn.collection('users').findOne(obj, function (err, document) {
        console.log(document);
        if (document) {
            res.json(document)
        } else {
            res.json(err)
        }
    });

}