const { response } = require("express");
const UserModel = require("../models/UserSchema");

function RegisterUser(req,res){
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let userdata={
        username:username,
        email:email,
        password:password
    }
    let result = new UserModel(userdata);
    result.save().then((item)=>{
        return res.json({
            message:"registration successful",
            data: item
        })
    }).catch((err)=>{
        return res.json({
            message:"Registration failed"
        })
    })
}

module.exports = RegisterUser;