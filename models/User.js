import mongoose from "mongoose";

const userSchema =  mongoose.Schema({

 email :{

    type:String,
    required : true,
    unique : true
 },

 firstName:{
    type : String,
    required : true

 },

 lastName:{
type : String,
required :true

 },

 password :{
type : String,
required: true

 },

 isBlocked :{
    type: Boolean,
    default: false
 },

 type:{
    type: String,
    default : "Customer"

 },

 profilePicture :{
    type : String,
    default : "https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-solid-icon-121102166.jpg?ct=jpeg"

 }



})

const User = mongoose.model("users",userSchema)

export default User;