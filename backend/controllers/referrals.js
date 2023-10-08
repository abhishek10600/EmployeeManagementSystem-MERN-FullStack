const Referral = require("../model/Referral.js");

exports.createReferral = async (req, res, next) => {
    try {
        const { jobId, employeeName, employeeId, candidateName, mobileNumber, email } = req.body;
        const referral = await Referral.create({
            jobId,
            employeeName,
            employeeId,
            candidateName,
            mobileNumber,
            email
        })
        res.status(201).json({
            success: true,
            message: "Referral added",
            referral
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}

exports.getReferralByJobId = async (req, res, next) => {
    try {
        const { jobId } = req.body;
        const referrals = await Referral.find({ jobId });
        if (!referrals) {
            return next(new Error("Referral for this job id does not exists"));
        }
        res.status(200).json({
            success: true,
            referrals
        })
    } catch (error) {
        console.log(error.message);
    }
}