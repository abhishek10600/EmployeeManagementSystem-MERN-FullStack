const mongoose = require("mongoose");

const interviewFeedbackSchema = new mongoose.Schema({
    jobId: {
        type: Number,
        require: [true, "Please enter a job id."]
    },
    candidateName: {
        type: String,
        required: [true, "Please enter the name of the candidate."]
    },
    totalExperience: {
        type: Number,
        required: [true, "Please enter the experience."]
    },
    interviewerName: {
        type: String,
        required: [true, "Please enter the name of the interviewer."]
    },
    skillsEvaluated: {
        type: String,
        required: [true, "Please enter the skills of the candidate."]
    },
    overallRating: {
        type: Number,
        required: [true, "Please enter the rating of the candidate."]
    },
    comments: {
        type: String,
        required:[true, "Please enter a comment"]
    },
    hired: {
        type: String,
        required: [true, "Please enter decision."]
    },
    level: {
        type: String,
        required: [true, "Please enter the level."]
    }
})

module.exports = mongoose.model("InterviewFeedback", interviewFeedbackSchema)