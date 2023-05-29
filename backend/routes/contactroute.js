const express= require("express");
const router=express.Router();

router.route('/').get((req,res)=>{
    res.status(200).json({message:"GET contacts"});
});

router.route('/').post((req,res)=>{
    res.status(200).json({message:"CREAT contacts"});
});

router.route('/:id').get((req,res)=>{
    res.status(200).json({message:`GET contact for ${req.params.id}`});
});

router.route('/:id').put((req,res)=>{
    res.status(200).json({message:`UPDATE contact for ${req.params.id}`});
});

router.route('/:id').delete((req,res)=>{
    res.status(200).json({message:`DELETE contact for ${req.params.id}`});
});

module.exports = router;