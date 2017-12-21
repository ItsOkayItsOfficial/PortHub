const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  employer: { type: String, required: true },
  title: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate : { type:Boolean},
  duties: String
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
