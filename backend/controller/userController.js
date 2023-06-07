const asyncHandler= require("express-async-handler");

//post request
const registerUser= asyncHandler(async(req,res)=>{
    res.json({message: "register the user"});
});

//post request
const loginUser= asyncHandler(async(req,res)=>{
    res.json({message: "Login the user"});
});

//get request
const currentUser= asyncHandler(async(req,res)=>{
    res.json({message: " Current user"});
});

module.exports={registerUser,loginUser,currentUser};