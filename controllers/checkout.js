const UserInfo = require("../models/userinfo");

const checkout = async (req, res) => {
    const data = req.body;
    await UserInfo.create(data);
    return res.json([{ success: true }]);
};

module.exports = { checkout };
