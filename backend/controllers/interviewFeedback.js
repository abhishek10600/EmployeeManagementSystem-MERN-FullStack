const InterviewFeedback = require("../model/InterviewFeedback.js");

exports.createInterviewFeedback = async (req, res, next) => {
    try {
        const { jobId, candidateName, totalExperience, interviewerName, skillsEvaluated, overallRating, comments, hired, level } = req.body
        const interviewFeedback = await InterviewFeedback.create({
            jobId,
            candidateName,
            totalExperience,
            interviewerName,
            skillsEvaluated,
            overallRating,
            comments,
            hired,
            level
        })
        res.status(201).json({
            success: true,
            message: "Interview feedback created successfully",
            interviewFeedback
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}