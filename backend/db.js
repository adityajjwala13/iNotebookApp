// const mongoose = require("mongoose");
// require("dotenv").config();

// const mongoURI = process.env.MONGODB_URL; //For Remote:ON MongoDB Atlas
// // const mongoURI =
// //   "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// const connectToMongo = () => {
//   mongoose.connect(mongoURI, () => {
//     console.log("Connected to Mongo Successfully");
//   });
// };
// module.exports = connectToMongo;

const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB_URL;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to Mongo Successfully");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1); // optional: exit process if db fails
  }
};

module.exports = connectToMongo;
