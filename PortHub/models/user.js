import { GridFSBucketWriteStream } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/mongodb";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: password, required: true },
  email: { type: String, required: false },
  address:{ type: String, required: false },
  phone: {type:String, required:false},
  bio: {type:String, required:false},
  currentTitle: {type:String, required:false},
  site: {type:String, required:false},
  github: {type:String, required:false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
