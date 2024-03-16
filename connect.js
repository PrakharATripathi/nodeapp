const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: "BackendApi" })
        .then(() => {
            console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
        })
        .catch((err) => {
            console.error(`Error connecting to MongoDB: ${err.message}`);
        });
};

module.exports = connectDB;
