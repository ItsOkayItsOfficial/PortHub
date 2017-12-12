import { GridFSBucketWriteStream } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/mongodb";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: false },
  address:{ type: String, required: false },
  phone: {type:String, required:false},
  professionalSkills: {type:String, required:false},
  summary: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
