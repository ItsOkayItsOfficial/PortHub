const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: {type:String, required:true},
  avatar_url: {type:String, required:true},
  // firstName: { type: String, required: false },
  // lastName: { type: String, required: false },
  // password: { type: String, required: false },
  // email: { type: String, required: false },
  // address:{ type: String, required: false },
  // phone: {type:String, required:false},
  // bio: {type:String, required:false},
  // currentTitle: {type:String, required:false},
  // site: {type:String, required:false},
  // github: {type:String, required:false}
  contact: {type:Object, required: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
