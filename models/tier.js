const {Schema, model } = require("mongoose");

let tierSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Tier = model("Tier", tierSchema);
module.exports = Tier