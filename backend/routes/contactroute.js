const express= require("express");
const router=express.Router();
const {getContacts,createContact,getContact,updateContact, deleteContact}=require("../controller/controller.js");
const { validateToken } = require("../middlewares/validateTokenHandler.js");

router.use(validateToken);//uses middleware on all the routes

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;