const express = require('express');
const users=require("../controller/user")




const userRouter=express.Router()
userRouter.post("/",users.createUser)
userRouter.get("/",users.getUsers)










module.exports=userRouter