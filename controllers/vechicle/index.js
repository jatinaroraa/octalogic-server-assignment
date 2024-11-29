const express = require("express");
const app = express();
const router = express.Router();
const controller = require("./vechicle.controller");

router.get("/getallList", controller.vechicleList);
module.exports = router;
