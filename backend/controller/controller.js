const getContacts= (req,res)=>{
    res.status(200).json({message:"GET contacts"});
};

const createContact= async (req,res)=>{
    console.log(req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All Fields required")
    }
    res.status(201).json({message:"CREATE contacts"});
};

const getContact= async (req,res)=>{
    res.status(200).json({message:`GET contact for ${req.params.id}`});
};

const updateContact= async(req,res)=>{
    res.status(200).json({message:`UPDATE contact for ${req.params.id}`});
};

const deleteContact= async(req,res)=>{
    res.status(200).json({message:`DELETE contact for ${req.params.id}`});
};
module.exports= {getContact,createContact,getContact,updateContact,deleteContact}