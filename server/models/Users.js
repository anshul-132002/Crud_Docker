const mongoose = require('mongoose')


const UserSchema =new mongoose.Schema({
name :String,
email:String,
phone:Number
})

const UserModel = mongoose.model("usersdata",UserSchema)
module.exports=UserModel;