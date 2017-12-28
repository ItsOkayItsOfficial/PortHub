const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: {type:String, required:true},
  avatar_url: {type:String, required:true},
  contact: [
    {
      type: Schema.Types.ObjectId,
      ref: "Contact"
    }
  ],
  education: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Education"
    }
  ],
  experience: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Experience"
    }
  ],
  portfolio: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Portfolio"
    }
  ],
  skills: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Skills"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
