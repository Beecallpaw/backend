require("dotenv").config()

module.exports = {
    database: {
        dbDSN: process.env.dbDSN ? process.env.dbDSN : "mongodb://localhost:27017/assessment"
    },
    port: process.env.port ? process.env.port : "4000"
}