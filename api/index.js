import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"
import cookieParser from "cookie-parser";
//const express=require('express');
const app=express();
// for reaching to .env file -->

dotenv.config();
//mongoose.connect(process.env.MONGO,{useNewUrlParser:true}).then(()=>{console.log("connected")});
  
const connect = async ()=>{
try{
await mongoose.connect(process.env.MONGO,{useNewUrlParser:true}).then(()=>{console.log("connected")});
}
catch(error){throw error}
}
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})

//Middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

//Error handling Middleware
app.use((err,req,res,next)=>{
    const errorStatus=err.status||500
    const errorMessage=err.message||"Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage
    });
})

app.listen(5000,()=>{
    connect();
    console.log("connected to backend.")

})
