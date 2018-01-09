var db = require("../models");
const express = require('express');
const router = express.Router();

// update/create User collections with inputs from InputPage
router.post('/updateUserInputs', ((req, res) => {
  console.log(req.body.skills)
  console.log(req.body.currentUser)
  db.User.findOneAndUpdate({
      login: req.body.login
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


router.post('/templateURL', ((req, res) => {
  db.Template.findOneAndUpdate({
    html: req.body.filecontent
  },
  {
    url: req.body.filename
  })
  .then((response) => {
    res.json('success');
  })
  .catch((err) => {
    console.log(err)
  })
  
}))

//Adds website template into Template db and associates website to user profile
router.post('/site', ((req, res) => {
  db.Template
  .create(
    {templateName:req.body.currentTemplate, 
      html: req.body.html, 
      type: req.body.type,
      img: req.body.img, 
      lastEdited:Date.now()}
    )
  .then((response) =>{
    return db.User.findOneAndUpdate(
      {login:req.body.login}, 
      { $push:{template:response}}, 
      {new:true}
    )
  })
  .then((response) => {
    console.log("website template added to db");
    res.json("success");
  })
  .catch((err) => {
      console.log('error')
  });
}))

//Adds resume template into Template db and associates resume to user profile
router.post('/insertResumeIntoDb', ((req, res) => {
  db.Template.create({templateName:req.body.currentTemplate, type: req.body.type, lastEdited:Date.now(), img: req.body.img, html:req.body.html, login:req.body.login})
  .then((response) => {
    return db.User.findOneAndUpdate(
      {login:req.body.login}, 
      { $push:{template:response}}, 
      {new:true}
    )
  })
  .then((response) => {
    console.log("resume template added to db");
    res.json("success");
  })
  .catch((err) => {
    console.log(err)
  });
}))

// retrieve the TemplateID given login and template name. sort by lastEdited
// and send back the ID
router.post('/getTemplateID', ((req, res) => {
  db.Template.find({templateName:req.body.templateName, login:req.body.login})
  .sort({lastEdited:-1})
  .then((data) =>{
    return res.send(data[0]._id);  
  })  
}))


// search users, if found then do nothing else create one. 
router.post('/user', (req, res) => {
  db.User.find({login:req.body.login})
  .populate('template')
  .then((user) => {
  return user.length === 0 ? 
    db.User.create({
      login:req.body.login,
      pin: (Math.floor(Math.random() * 10000) + 10000).toString().substring(1),
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