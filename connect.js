const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: "BackendApi", })
        .then((c) => {
            console.log(`Connected to MongoDB: ${c.connection.host}`);
        })
        .catch((err) => {
            console.error(`Error connecting to MongoDB: ${err}`);
        });
};

module.exports = connectDB;
