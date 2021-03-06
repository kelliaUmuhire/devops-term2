const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;

// process.env.MONGO_URI
// mongodb://mongo:27017/testing
//connect to MongoDB server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

module.exports = db;
