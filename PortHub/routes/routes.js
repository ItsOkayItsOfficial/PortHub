var db = require("../models");
const express = require('express');
const router = express.Router();


router.post('/api/create', ((req, res) => {
  db.Category.create({
    contact : req.body.contact,
    education : req.body.education,
    experience : req.body.experience,
    skills : req.body.skills,
    portfolio : req.body.portfolio,
    currentUser : req.body.currentUser,
    templateName : req.body.currentTemplate,
    type:req.body.type
    })
    .then((response)=>{
        res.json('success');
    })
    .catch((err) => {
        console.log(err)
      });     
}))

router.post('/api/resume', ((req, res) => {
    var fs = require('fs'); 
    fs.writeFile(__dirname + '/../client/public/temp/resume.html', req.body.html);
    res.json("html created");
}))

router.post('/api/createpdf', ((req, res) =>{
    var fs = require('fs');     
    var pdf = require('html-pdf');
    var options = { format: 'Letter' };     
    var htmlFile = fs.readFileSync(__dirname + '/../client/public/temp/resume.html', 'utf8');   
    pdf.create(htmlFile, options).toFile(__dirname + '/../client/public/temp/resume.pdf', function(err, res1) {
        if (err) return console.log(err);
        res1.json("pdf created");
      });
}))

                        education:response[0].education,
router.get('/api/download', (req, res) => {
    res.download(__dirname + "/../temp/resume.html");
    res.json("pdf downloaded");
})

// router.post('/api/user', ((req, res) => {
//     console.log("**** currentTemplate:" + req.body.currentTemplate + 
//                 " currentUser: " + req.body.currentUser);
//     db.Category.find({currentUser : req.body.currentUser, template: req.body.currentTemplate})
//     .then((response)=>{
//         res.json(response)
//     });
// }))

//user routes
router.post('/api/user', (req, res) => {
  db.User.find({login:req.body.login})
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

// router.post('/api/create', (req, res) => {
//   db.User.findOneAndUpdate({
//     login: req.body.currentUser.login
//   },
//   {
//     contact: req.body.contact
//   })
//   .then((response) => {
//     console.log(response);
//   })
// })
module.exports = router;