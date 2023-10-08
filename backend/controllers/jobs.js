const Job = require("../model/Job.js");

exports.createJob = async (req, res, next) => {
    try {
        const { jobDescription, jobId, skillSet, status, minimumExperience, location, totalCandidates } = req.body;
        const job = await Job.create({
            jobDescription,
            jobId,
            skillSet,
            status,
            minimumExperience,
            location,
            totalCandidates
        })
        res.status(201).json({
            success: true,
            message: "Job Created successfully",
            job
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

exports.getAllJobs = async (req, res, next) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({
            success: true,
            jobs,
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

exports.getJobById = async (req, res, next) => {
    try {
        const { jobId } = req.body;
        const job = await Job.find({ jobId });
        if (!job) {
            return next(new Error("Job with this id does not exists"));
        }
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

exports.deleteJob = async (req, res, next) => {
    try {
        const jobId = req.params.jobId;
        const job = await Job.findOneAndDelete({ jobId });
        res.status(200).json({
            success: true,
            message: "Job has been deleted",
            job
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}