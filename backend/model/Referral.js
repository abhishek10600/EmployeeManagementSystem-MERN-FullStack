const mongoose = require("mongoose");
const validator = require("validator");

const referralSchema = new mongoose.Schema({
    jobId: {
        type: Number,
        required: [true, "Please enter the job id"]
    },
    employeeName: {
        type: String,
        required: [true, "Please enter the employee name"],
    },
    employeeId: {
        type: Number,
        required: [true, "Please enter the employee id"]
    },
    candidateName: {
        type: String,
        required: [true, "Please enter the name of the candidate"]
    },
    mobileNumber: {
        type: Number,
        required: [true, "Please enter the mobile number of candidate"]
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please enter email in correct format"],
        required: [true, "Please enter the email of the candidate"],
        unique: true
    },
    resume: {
        type: String,
        default: "resume.doc"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Referral", referralSchema);