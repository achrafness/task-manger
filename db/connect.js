const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};
module.exports = connectDB;
// .then(()=>console.log("mongo db is connect"))
// .catch((err)=>console.log(err))
