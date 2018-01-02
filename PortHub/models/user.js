const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: {type:String, required:true},
  avatar_url: {type:String, required:true},
  contact: {},
  education: [],
  experience: [],
  portfolio: [],
  skills: [], 
  education: [],
  password:{type:String},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
