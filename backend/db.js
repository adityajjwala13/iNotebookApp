const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB_URL; //For Remote:ON MongoDB Atlas
// const mongoURI =
//   "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};
module.exports = connectToMongo;
