var db = require("../models");
const express = require('express');
const router = express.Router();


router.post('/api/create', ((req, res) => {
  console.log("here");
  db.Category.create({
    contact : req.body.contact,
    education : req.body.education,
    experience : req.body.experience,
    skills : req.body.skills,
    portfolio : req.body.portfolio
})
.then((response)=>{
    console.log("responose: ", response);
    res.json('success')
})


}))

module.exports = router;