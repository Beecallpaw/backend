const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const Service = require("./models/service");

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

app.listen(4000, function () {
    console.log("Started application on port %d", 4000);
});

