const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
  title: { type: String, required: true },
  level: { type: String, required: true }
});

const Skill = mongoose.model("Skill", skillsSchema);

module.exports = Skill;
