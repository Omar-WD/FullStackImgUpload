const express = require('express');
const products=require("../controller/products")

const productRouter=express.Router()
productRouter.post("/",products.createProduct)

module.exports=productRouter