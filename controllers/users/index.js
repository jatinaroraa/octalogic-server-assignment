const express = require("express");
const app = express();
const router = express.Router();
const controller = require("./users.controller");

router.get("/test", controller.getUsers);
module.exports = router;
