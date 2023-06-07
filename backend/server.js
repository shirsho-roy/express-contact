const express= require("express");
const { errorHandler } = require("./middlewares/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
const dotenv=require("dotenv").config();
const app=express();
const port=process.env.PORT||5000;
//Middlewares
app.use(express.json());
app.use('/api/contacts',require("./routes/contactroute.js")); 
app.use('/api/users',require("./routes/userRoutes.js"));
app.use(errorHandler)
connectDb();
app.listen(port,()=>{
    console.log(`Server runnning on port ${port}`);
});