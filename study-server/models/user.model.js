const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  level: {
    type: Number
  }

});

module.exports = mongoose.model("user", UserSchema);