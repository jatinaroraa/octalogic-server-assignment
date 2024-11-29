// const express = require("express");
// const app = express();
// const router = express.Router()

// router.get

module.exports = (app) => {
  app.use("/api", require("./controllers/users"));
  app.use("/api/vechicle", require("./controllers/vechicle"));
  app.use("/api/booking", require("./controllers/Bookings"));
};
