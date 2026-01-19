const mongoose = require("mongoose")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: (value)=> {
            if(!value || value.length < 4){
                throw new Error("length cannot be smaller than 4")
            }
        }
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: (value) => {
            if(!validator.isEmail(value)) {
                throw new Error("not a valid email")
            }
        }
    },
    age: {
        type: Number,
        min: 18,
        max: 60
    },
    gender: {
        type: String,
        lowercase: true,
        trim: true,
        enum: {
            values: ["male", "female", "others"],
            message: '{VALUE} is not supported' 
        }
    },
    about: {
        type: String,
        default: "This default of about",
        maxLength: "100"
    },
    photoUrl: {
        type: String,
        default: "abc.com",
        validate: (value) => {
            if(!validator.isURL(value)){
                throw new Error("not a valid URL")
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate: (value) => {
            if(!validator.isStrongPassword(value)) {
                throw new Error("password is not strong")
            }
        }
    },
    skills: {
        type: [String],
        validate: {
            validator: (value) => {
                if(!value || !Array.isArray(value) || value.length > 10){
                    return false
                }
                return true
            }, 
        message: "skills not valid"
        }
    }
}, {
    timestamps: true
})

userSchema.index({gender: 1})

userSchema.methods.validatePassword = async function(password){
    const user = this
    const isValidPassword = await bcrypt.compare(password, user.password)
    return isValidPassword
}

userSchema.methods.getJWT = function(){
    const user = this;
    const token = jwt.sign({userID: user._id}, "socialMedia@123", {expiresIn: "1h"});
    return token;
}



const UserModel = mongoose.model("User", userSchema)
module.exports = UserModel
