const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },  
  description: String
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
