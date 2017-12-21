const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const educationSchema = require ('./Education');

const categorySchema = new Schema({
  contact: {},  
  // education: [educationSchema],
  education:[],
  experience: [],
  skills: [],
  portfolio: [],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
