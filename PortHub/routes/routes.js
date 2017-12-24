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
    })
    .then((response)=>{
        console.log("response: ", response);
        res.json('success')
    })
}))

router.post('/api/user', ((req, res) => {
    console.log("**** currentTemplate:" + req.body.currentTemplate + 
                " currentUser: " + req.body.currentUser);

      db.Category.find({currentUser : req.body.currentUser, templateName: req.body.currentTemplate})
        .then((response)=>{
            res.json(response)
        })
    }))
module.exports = router;