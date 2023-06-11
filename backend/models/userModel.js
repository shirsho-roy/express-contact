const mongose=require('mongoose');

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required: [true, "Please add user Name"],
    },
    email:{
        type:String,
        required: [true, "Please add email id"],
        unique:[true,"Email Address already in use"]
    },
    email:{
        type:String,
        required: [true, "Please add Password"],
    },
},{
    timestamps: true,
});
module.exports=mongoose.model("User",userSchema);