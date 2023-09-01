const mongoose = require("mongoose")

const connectDB = (url) =>{
    return mongoose
    .connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    })
}
module.exports = connectDB
    // .then(()=>console.log("mongo db is connect"))
    // .catch((err)=>console.log(err))