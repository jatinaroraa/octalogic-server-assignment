const express = require("express");
const app = express();
const router = express.Router();
const controller = require("./bookings.controller");

router.post("/createBooking", controller.createBooking);
module.exports = router;
