const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  login:{type:String},
  currentTemplate: {type:String},
  type:{type:String},
  lastEdited:{type:Date},
  url:{type:String},
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
