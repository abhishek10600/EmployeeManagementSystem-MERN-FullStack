require("dotenv").config();
const express = require("express");
const CORS = require("cors");
const jobRouter = require("./routes/jobs.js");
const referralRouter = require("./routes/referrals.js");
const eventRouter = require("./routes/events.js");
const intervewFeedbackRouter = require("./routes/interviewFeedback.js");

const app = express();

app.use(CORS());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/referrals", referralRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/interviewFeedbacks", intervewFeedbackRouter)

module.exports = app;