const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const Userinfo = new Schema({
    username: String,
    email : String,
    password : String
})

const UserModel = mongoose.model("UserInfo",Userinfo);

module.exports = UserModel;