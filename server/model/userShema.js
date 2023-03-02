const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const userSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    cpassword:{
        type:Number,
        required:true
    },
    tokens: [
        {
            token: {
                type:String,
                required:true
            } 
        }
    ]

})




const Logins = mongoose.model('LOGINS',userSchema); 
module.exports = Logins;
 