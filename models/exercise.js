const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        trim: true,
        required: "Enter a name for transaction"
    },
    name: {
        type: String,
        required: "Enter an amount"
    },
    duration: {
        type: Number,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
    },
    reps: {
        type: Number,
        required: false,
    },
    sets: {
        type: Number,
        required: false,
    },


});

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;