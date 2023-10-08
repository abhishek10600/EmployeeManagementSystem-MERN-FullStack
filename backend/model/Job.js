const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: true
    },
    jobId: {
        type: Number,
        required: true,
        unique: true
    },
    skillSet: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    },
    minimumExperience: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    totalCandidates: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Job", jobSchema);