const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employementSchema = new Schema({
  employer: { type: String, required: true },
  title: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate : { type:Boolean},
  duties: String
});

const Experience = mongoose.model("Experience", employmentSchema);

module.exports = Experience;
