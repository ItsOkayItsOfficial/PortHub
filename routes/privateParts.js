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


// router.post('/templateURL', ((req, res) => {
//   db.Template.findOneAndUpdate({
    
//   })
  
// }))
//Creates template model associated with user when the user makes a website
router.post('/site', ((req, res) => {
  db.Template
  .create(
    {templateName:req.body.currentTemplate, 
      html: req.body.html, 
      type: req.body.type, 
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
    console.log("template added");
    res.json("success");
  })
  .catch((err) => {
      console.log('error')
  });
}))

// create html page from input page and update Template collection
router.post('/resume', ((req, res) => {
  var fs = require('fs');

  console.log('expected root of app:', '../client/public/temp/resume.html');
  fs.writeFile('/app/client/public/temp/resume.html', req.body.html, (err) => {

    if (err) throw err;
    console.log('html added');
  })

  db.Template.create({templateName:req.body.currentTemplate, html:req.body.html, type: req.body.type, lastEdited:Date.now()})
  .then((response) => {
    return db.User.findOneAndUpdate(
      {login:req.body.login}, 
      { $push:{template:response}}, 
      {new:true}
    )
  })
  .then((response) => {
    console.log("template added");
    res.json("success");
  })
  .catch((err) => {
    console.log(err)
  });
}))

// create pdf from html
router.post('/createpdf', ((req, res) => {
    const fs = require('fs');     
    const pdf = require('html-pdf');
    const options = { 
      "format": "Letter",
      "border": {
      "top": "0",
      "bottom":"0",
      "left": "0",
      "right":"0"            
      },
  };
    const htmlFile = fs.readFileSync('/app/client/public/temp/resume.html', 'utf8');   
    pdf.create(htmlFile, options).toFile('/app/client/public/temp/resume.pdf', (err, res1) => {
      if (err) return console.log(err);
      console.log('success from pdfcreate')
    });  
  return res.json('success');
    // var options = { "format":"Letter", "margin":"0" };    
}));

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