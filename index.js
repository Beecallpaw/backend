const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const path = require("path");
const PORT = process.env.PORT || 4000;
const app = express();

//app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
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
const checkoutRoutes = require("./routes/checkout");

app.use("/services", serviceRoutes);
app.use("/checkout", checkoutRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, function () {
    console.log("Started application on port %d", PORT);
});
