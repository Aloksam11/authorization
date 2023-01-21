const express = require("express");
const getUser = require("../controllers/getUser");
const AuthRouter = express.Router();

const LoginUser = require("../controllers/LoginUser");
const RegisterUser = require("../controllers/RegisterUser")
const Validator =require("../utils/Validator")
AuthRouter.post("/register",RegisterUser);
AuthRouter.post("/login",LoginUser)
AuthRouter.get("/user",Validator,getUser)
module.exports = AuthRouter;