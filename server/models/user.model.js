import mongoose from "mongoose";
import { type } from "os";
import { setTheUsername } from "whatwg-url";

const userSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true,
        },
        userName:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
            minlength:6,
        },
        gender:{
            type:String,
            required:true,
            enum:["male", "female"],
        },
        phoneNumber:{
            type:Number,
            required:true,
            unique:true,
            maxlength:10,
        },
        emailAddress:{
            type:String,
            required:true,
            unique:true,
        },
        profilePic:{
            type:String,
            default:"https://www.google.com",
        },
    }
)

const User = mongoose.model("User", userSchema);

export default User;