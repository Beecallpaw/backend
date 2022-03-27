
var UserInfo = require('../models/userinfo');

const checkout = async (data) => {
    try {
        const response = await UserInfo.create(data);
        return { success: true };
        
    } catch (e) {
        throw Error('Error while checking out.')
    }
}

module.exports = {
    checkout
}