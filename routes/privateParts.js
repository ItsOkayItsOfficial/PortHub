var db = require("../models");
const express = require('express');
const router = express.Router();

// update/create User collections with inputs from InputPage
router.post('/create', ((req, res) => {
  db.User.findOneAndUpdate({
      login: req.body.currentUser.login
    },
    {
      education: req.body.education,
      experience: req.body.experience,
      skills: req.body.skills,
      portfolio: req.body.portfolio,
      contact: req.body.contact
    })
    .then((response)=>{
    //  console.log('response',response);
        res.json('success');
    })
    .catch((err) => {
        console.log(err)
      });     
}))

//Creates template model associated with user when the user makes a website
router.post('/site', ((req, res) => {
    db.Template
    .create({templateName:req.body.currentTemplate, type: req.body.type, lastEdited:Date.now()})
    .then((response) =>{
        return db.User.findOneAndUpdate({login:req.body.login}, { $push:{template:response}}, {new:true})
    })
    .then(() => {
      console.log("template added");
      res.json("success");
    })
    .catch((err) => {
        console.log(err)
      });
}))

// create html page from input page and update Template collection
router.post('/resume', ((req, res) => {
    var fs = require('fs');
    fs.writeFile(__dirname + '/../client/public/temp/resume.html', req.body.html);
    //fs.writeFile('./resume.html', req.body.html);    
    console.log("html created");
    db.Template
    .create({templateName:req.body.currentTemplate, type: req.body.type, lastEdited:Date.now()})
    .then((response) =>{
        return db.User.findOneAndUpdate({login:req.body.login}, { $push:{template:response}}, {new:true})
    })
    .then(() => {
      console.log("template added");
      res.json("success");
    })
    .catch((err) => {
        console.log(err)
      });
}))

// create pdf from html
router.post('/createpdf', ((req, res) =>{
    var fs = require('fs');     
    var pdf = require('html-pdf');
 
    var htmlFile = fs.readFileSync(__dirname + '/../client/public/temp/resume.html', 'utf8');   
    // var options = { "format":"Letter", "margin":"0" };    
    var options = { 
      "format": "Letter",
      "border": {
      "top": "0",
      "bottom":"0",
      "left": "0",
      "right":"0"            
      },
  };
    pdf.create(htmlFile, options).toFile(__dirname + '/../client/public/temp/resume.pdf', function(err, res) {
        if (err) return console.log(err);
      });
    res.json("success");
}))

// search users, if found then do nothing else create one. 
router.post('/user', (req, res) => {
  db.User.find({login:req.body.login})
  .populate('template')
  .then((user) => {
  return user.length === 0 ? 
    db.User.create({
      login:req.body.login,
      avatar_url: req.body.avatar_url
    })
    : user
  })
  .then((response) => {
    console.log('User sent to client');
    res.json(response);
  })
})


module.exports = router;