const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const referenceSchema = new Schema({
  referenceName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  acquaintenceType: { type: String, required: true }
});

const Reference = mongoose.model("Reference", referencesSchema);

module.exports = Reference;
