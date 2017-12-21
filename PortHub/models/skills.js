const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employementSchema = new Schema({
  title: { type: String, required: true },
  level: { type: Int8Array, required: true }
});

const Skill = mongoose.model("Skill", employmentSchema);

module.exports = Skill;
