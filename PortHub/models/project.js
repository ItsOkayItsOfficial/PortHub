const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: { type: String, required: true },
  yearsWorkedOn: { type: String, required: true },
  description: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
