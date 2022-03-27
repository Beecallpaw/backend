const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const Service = require("./models/service");
const Tier = require("./models/tier");

const app = express();
app.use(express.json());

mongoose.connect(config.database.dbDSN, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connection successful")
});

app.use(cors());

app.get("/services", async function (request, response) {
    const services = await Service.find({})
    if(!services){
        return response.status(404).json({ message: "Sorry there are no Services available." })
    }
    return response.json(services);
});

app.get("/services/:slug", async function (request, response) {
    let service = await Service.findOne({slug: request.params.slug})
    let tiers =  await Tier.find({});

    let finalData = {...{_id: service._id, name: service.name, description: service.description}, tiers}
    
    return response.json(finalData);
});

app.listen(4000, function () {
    console.log("Started application on port %d", 4000);
});

