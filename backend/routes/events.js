const express = require("express");
const { createEvent } = require("../controllers/events.js");

const router = express.Router();

router.route("/createEvent").post(createEvent);

module.exports = router;