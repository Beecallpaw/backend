const { Schema, model } = require("mongoose");

let serviceSchema = new Schema({
    name: {
        type: String,
        requred: true,
    },
    slug: {
        type: String,
        requred: true,
    },
    description: {
        type: String,
        requred: true,
    },
});

let Service = model("Service", serviceSchema);
module.exports = Service;
