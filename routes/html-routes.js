const express = require('express');
const router = require("express").Router();
const path = require('path');
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
});

module.exports = router;