const express = require('express');
const router = require("express").Router();
const path = require('path');
const Workouts = require('../models/exercise.js')
// add in connection to models . 


// index 
router.get("/", (req, res) => {
//.send sends data to the browser
res.sendFile(path.join(__dirname, 'public','index.html'));
})

// exercise page
router.get("/exercise", (req, res) => {
    //.send sends data to the browser
    res.sendFile(path.join(__dirname, '../public','exercise.html'));
    })

// retrieve workout history 
router.get("/api/workouts", (req, res)=> {
    Workouts.find({})
    .then(workouts => {
        res.json(workouts)
    })
    .catch(err => {
        res.status(400).json(err);
      });
    console.log(req.body);
    //res.end();
    })

//create new workout
router.post("/api/workouts", (req, res)=> {
console.log(req.body);
res.end();
})
// one for put 

//one for post 
router.get("/api/workouts", (req, res)=> {
    console.log(req.body);
    res.end();
    })

///api/workouts/ 

module.exports = router;