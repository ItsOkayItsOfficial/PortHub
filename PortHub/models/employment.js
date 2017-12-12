const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employementSchema = new Schema({
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  location: { type: String, required: true },
  yearsAttended: { type: String, required: true },
  currentlyEmployed : { type:Boolean},
  descriptionOfDuties: String
});

const Employment = mongoose.model("Employment", employmentSchema);

module.exports = Employment;
