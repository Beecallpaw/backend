const express = require("express");
const router = express.Router();
const CheckoutController = require("../controllers/checkout");

router.get("/", CheckoutController.checkout);

module.exports = router;