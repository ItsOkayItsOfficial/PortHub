const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  password: { type: String, required: false },
  email: { type: String, required: false },
  address:{ type: String, required: false },
  phone: {type:String, required:false},
  bio: {type:String, required:false},
  currentTitle: {type:String, required:false},
  site: {type:String, required:false},
  github: {type:String, required:false}
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
