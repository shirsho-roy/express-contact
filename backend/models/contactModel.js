const mongoose=require("mongoose");

const contactSchema= mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User",
    },
    name:{
        type:String,
        required: [true,"Please Add Cotact Name"],
    },
    email:{
        type: String,
        required: [true,"Please Add Email Address"],
    },
    phone:{
        type: String,
        required: [true,"Please Add Cotact Number"],
    },
},{
    timestamps:true,
});

module.exports=mongoose.model("contact",contactSchema);// contact: Is the new Collecton name inside the cluster MyContacts-Backend