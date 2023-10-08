const express = require("express");
const { createReferral, getReferralByJobId } = require("../controllers/referrals.js");

const router = express.Router();

router.route("/createReferral").post(createReferral);
router.route("/find").post(getReferralByJobId);

module.exports = router;