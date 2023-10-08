const Event = require("../model/Event.js");

exports.createEvent = async (req, res, next) => {
    try {
        const { referralId, location, timeFrom, timeTo } = req.body;
        const event = await Event.create({
            referralId,
            location,
            timeFrom,
            timeTo
        })
        res.status(201).json({
            sucess: true,
            message: "Event created successfully",
            event
        })
    } catch (error) {
        return next(new Error(error.message));
    }
}