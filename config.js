require("dotenv").config()

module.exports = {
    database: {
        dbDSN: process.env.dbDSN ? process.env.dbDSN : "mongodb+srv://beecallpaw:tr6s8ZWgWCAgv6fc@cluster0.gicg5.mongodb.net/assessment?authSource=admin&replicaSet=atlas-aoa2w4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
    },
    port: process.env.port ? process.env.port : "4000"
}