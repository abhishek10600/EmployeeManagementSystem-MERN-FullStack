const express = require("express");
const { createInterviewFeedback } = require("../controllers/interviewFeedback.js");

const router = express.Router();


router.route("/createInterviewFeedback").post(createInterviewFeedback);


module.exports = router;