const Service = require("../services/service")

const getServices = async (req, res) => {
    let services = await Service.getServices();
    if (!services) {
        return res
            .status(404)
            .json({ message: "Sorry there are no Services available." });
    }
    return res.json(services);
};

const getServiceDetails = async (req, res) => {
    let details = await Service.getServiceDetails(req.params.slug)
    return res.json(details);
};

module.exports = {
    getServices,
    getServiceDetails,
};
