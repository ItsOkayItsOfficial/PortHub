const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  schoolName: { type: String, required: true },
  degree: { type: String, required: true },
  location: { type: String, required: true },
  yearsAttended: { type: String, required: true }
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
