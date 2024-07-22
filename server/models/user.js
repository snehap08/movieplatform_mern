const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },

});

//generate jwt for specified users

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn:"7d"})
    return token
};

const User = mongoose.model("user", userSchema);

//validation of data

const validate =(data)=>{
    const schema = joi.object({
        email:joi.string().email().required().label("Email"),
        username: joi.string().min(3).max(30).required().label("Username"),
        password:passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
};

module.exports = {User, validate}