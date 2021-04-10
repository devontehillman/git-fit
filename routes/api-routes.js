const express = require('express');
const router = require("express").Router();
const path = require('path');
const Workouts = require('../models/workout.js')
// add in connection to models . 

// retrieve workout history 
router.get("/api/workouts", (req, res)=> {
    Workouts.find({})
    .then(workouts => {
        res.json(workouts)
    })
    .catch(err => {
        res.status(400).json(err);
      });
    //console.log(req.body);
    res.end();
    })

//create new workout
router.post("/api/workouts/:id", (req, res)=> {
    console.log("dh1")
    console.log(req.body)
    console.log(req.params)
    Workouts.create(body)
   
    .then(dbworkout => {
        res.json(dbworkout);
        console.log("dh2")
      })
      .catch(err => {
        res.status(400).json(err);
        console.log("dh3")
      });
res.end();
})
// one for put 

//one for post 
router.post("/api/workouts", (req, res)=> {
    console.log(req.body);
    res.end();
    })

///api/workouts/ 

module.exports = router;