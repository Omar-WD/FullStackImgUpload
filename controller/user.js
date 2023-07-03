const User=require("../models/user")



const createUser=async(req,res)=>{
    try{
        const {email,name}=req.body
        // const {body:{email,name}}=req
        const user=await User.create({email,name})
        console.log(user)
        res.status(201).json(user)

    }catch(error){
        console.error("Error while creating new User:", error);
        res.status(500).send("error while creating new User")
    }


}

const getUsers =async(req,res)=>{
    try{
        const user=await User.find()
        res.status(201).json(user)

    }catch(error){
        res.status(500).send("Error while getting users")
    }
}

module.exports={createUser,getUsers}