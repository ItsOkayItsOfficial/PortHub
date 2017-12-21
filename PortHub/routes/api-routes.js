// Requiring our models
var db = require("../models");
const express = require('express');
const router = express.Router();

// Routes
// =============================================================

    // Route for grabbing a specific Article by id, populate it with it's note
    router.post("/api/create", function(req, res) {
        db.User.findAll({
            where: {
              user_login: req.body.login
            }
          })
          .then((result) => {
            //if the user does not exist, create the user in the database
            if (result[0] === undefined) {
              return db.User.create({
                user_name:req.body.name,
                user_login: req.body.login,
                user_email: req.body.email,
                user_desc: req.body.bio,
                user_avatar: req.body.avatar_url
              })
            }
            // if the user exists, send back the user login information
            if (result[0].dataValues.id) {
              return result[0].dataValues.user_login;
            }
          })
          .then((result) => {
            res.json(result);
          })
    });

    router.post("/api/create", function(req, res){
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
            res.json(response);
        })
    });

module.exports = router;