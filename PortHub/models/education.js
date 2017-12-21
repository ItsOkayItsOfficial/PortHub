const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  schoolName: { type: String, required: true },
  major: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true }  
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
