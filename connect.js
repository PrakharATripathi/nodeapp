const mongoose = require('mongoose');

 const connectDB = () => {
    console.log(process.env.MONGO_URL)
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
  
module.exports = connectDB;
