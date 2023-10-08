const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    referralId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Referral"
    },
    location: {
        type: String,
        require: [true, "Please enter a location"]
    },
    timeFrom: {
        type: String,
    },
    timeTo: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Event", eventSchema);