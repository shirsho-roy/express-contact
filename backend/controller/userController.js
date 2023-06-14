const asyncHandler= require("express-async-handler");
const User = require("../models/userModel");
const bcrypt= require("bcrypt");
const jwt=require("jsonwebtoken");
//post request
const registerUser= asyncHandler(async(req,res)=>{
    const {username,email,password}= req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable=await  User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
    
    //Hashed pasword
   const hashedPassword=await bcrypt.hash(password,10);
   const user = await User.create({
     username,
     email,
     password:hashedPassword,
   });
   console.log(user);
   if(user){
    res.status(201).json({_id:user.id, email:user.email, });
   }
   else{
    res.status(400);
    throw new Error("User data not valid");
   }
    res.json({message: "register the user"});
});

//post request
const loginUser= asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable=await  User.findOne({email});
    //Compare Paswword input by user with hashed Password

    if(userAvailable &&bcrypt.compare(password,userAvailable.password)){
        //User authenticated
        const accessToken=jwt.sign({
            //Payload
            user:{
                username:userAvailable.username,
                email:userAvailable.email,
                id:userAvailable.id,
            },
        },process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1m"}
        );
        res.status(200).json({accessToken})
    }
    else{
        res.status(401);
        throw new Error("Email or Password invalid");
    }

});

//get request
//@access  private for authenticated User
const currentUser= asyncHandler(async(req,res)=>{
    res.json({message: " Current user"});
});

module.exports={registerUser,loginUser,currentUser};