const { validationResult } = require("express-validator");
const UserInfo = require("../models/userinfo");
const Checkout = require("../services/checkout");

const checkout = async (req, res) => {
    const data = req.body;
    if(data.payment == 'on'){
        data.payment = true;
    }else{
        data.payment = false;
    }
    let response = await Checkout.checkout(data);
    return res.json(response);
};

module.exports = { checkout };
