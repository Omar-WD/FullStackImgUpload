const express = require('express');
const mongoose =require('mongoose')
 require ("dotenv").config()
const DBCS=process.env.DB_Connection_String


mongoose.connect(DBCS)
.then(()=>{
    console.log("Server is connected succesfully")
}).catch(()=>{
    console.log("Server is failed to be connected")
})