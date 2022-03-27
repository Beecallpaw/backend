const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/service");

router.get("/", ServiceController.getServices);

router.get("/:slug", ServiceController.getServiceDetails)

module.exports = router;
