const express = require("express");
const app = express();

const tasks = require("./routes/tasks")

const connectDB = require("./db/connect")
require("dotenv").config()

const notFound = require("./middleware/not-found")
const errorhandler = require("./middleware/erreur")

app.use(express.static("./public"))

// middleware 
app.use(express.json())

app.use("/api/v1/tasks",tasks)
app.use(notFound)
app.use(errorhandler)

const port = process.env.PORT || 3000;

const start = async =>{
    try {
        connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{console.log(`server is running on port ${port}`);})
    } catch (error) {
        console.log(error);
    }
}
start();