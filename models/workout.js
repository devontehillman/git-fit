const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [
    {
    type: {
        type: String,
        trim: true,
        required: "Excercise name not recoreded"
    },
    name: {
        type: String,
        required: "Enter an name"
    },
    duration: {
        type: Number,
        required: false,
    },
    distances: {
        type: Number,
        trim: true
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
    }
    }
]

});

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;