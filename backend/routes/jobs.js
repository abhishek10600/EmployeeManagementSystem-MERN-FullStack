const express = require("express");
const { createJob, getAllJobs, getJobById, deleteJob } = require("../controllers/jobs.js");

const router = express.Router();

router.route("/all").get(getAllJobs);
router.route("/createJob").post(createJob);
router.route("/find").post(getJobById);
router.route("/delete/:jobId").delete(deleteJob);

module.exports = router;