const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const Service = require("./models/service");
const Tier = require("./models/tier");
const UserInfo = require("./models/userinfo");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

mongoose.connect(config.database.dbDSN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("connection successful");
});

app.use(cors());

const serviceRoutes = require("./routes/service")
const checkoutRoutes = require("./routes/checkout")
app.use("/services", serviceRoutes);
app.use("/checkout", checkoutRoutes);

app.listen(4000, function () {
    console.log("Started application on port %d", 4000);
});
