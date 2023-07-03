const Product = require("../models/products")


const createProduct=async(req,res)=>{
    try{
        const {name,price,image,owner}=req.body
        const product=await Product.create ({name,price,image,owner})
        res.status(201).json(product)

    }catch(error){
        console.error("Error while creating new Product:", error);
        res.status(500).send("error while creating new Product")
    }

}

module.exports={createProduct}