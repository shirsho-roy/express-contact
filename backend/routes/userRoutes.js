const express= require("express");
const router=express.Router();
const { registerUser, loginUser, currentUser } = require("../controller/userController");
const { validateToken } = require("../middlewares/validateTokenHandler");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// router.route("/current").get(currentUser);
router.get('/current',validateToken,currentUser);

module.exports=router;