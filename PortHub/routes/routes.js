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
    fs.writeFile("./temp/resume.html", req.body.html);
    res.json("html created");
}))

router.post('/api/createpdf', ((req, res) =>{
    var fs = require('fs');     
    var pdf = require('html-pdf');
    var options = { format: 'Letter' };     
    var htmlFile = fs.readFileSync('./temp/resume.html', 'utf8');   
    pdf.create(htmlFile, options).toFile('./temp/resume.pdf', function(err, res1) {
        if (err) return console.log(err);
        console.log(res1);
        res.json("pdf created");
      });
}))

router.get('/api/download', (req, res) => {
    res.download(__dirname + "/../temp/resume.html");
    res.json("pdf downloaded");
})

router.post('/api/user', ((req, res) => {
    console.log("**** currentTemplate:" + req.body.currentTemplate + 
                " currentUser: " + req.body.currentUser);
    db.Category.find({currentUser : req.body.currentUser, template: req.body.currentTemplate})
    .then((response)=>{
        res.json(response)
    });
}))
module.exports = router;