const express = require("express");
const router = express.Router();
const CheckoutController = require("../controllers/checkout");
const { validate } = require("../middlewares/validation");

router.post("/", validate, CheckoutController.checkout);

module.exports = router;
