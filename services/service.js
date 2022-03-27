var Service = require('../models/service');
const Tier = require('../models/tier');

const getServices = async function () {
    try {
        var services = await Service.find({})
        return services;
    } catch (e) {
        // Log Errors
        throw Error('Error while fetching services')
    }
}

const getServiceDetails = async (slug) => {
    try {
        let service = await Service.findOne({ slug });
        let tiers = await Tier.find({});
        let finalData = {
            ...{
                _id: service._id,
                name: service.name,
                description: service.description,
            },
            tiers,
        };
    
        return finalData;
        
    } catch (e) {
        throw Error("Error while fectching details")
    }
};

module.exports = {
    getServices,
    getServiceDetails
}