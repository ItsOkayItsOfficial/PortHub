const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  templateName: {type:String},
  type:{type:String},
  lastEdited:{type:Date},
  url:{type:String},
  img: {type:String},
  html: {type: String}
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;
