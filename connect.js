const mongoose = require('mongoose');


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: "BackendApi" })
        .then((c) => console.log(`database connect on ${c.connection.host}`))
        .catch(() => console.log("error"))
} 

module.exports = connectDB;