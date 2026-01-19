const validator = require("validator")

const ValidateSignup = (req)=> {
    const {firstName, lastName, email, password} = req.body

    if(!firstName || !lastName || !email || !password){
        throw new Error("Invalid data")
    }else if(!firstName.length || firstName.length < 4 || firstName.length > 20 || !lastName.length || lastName.length < 4 || lastName.length > 20 ){
        throw new Error("name is invalid")
    }else if(!validator.isEmail(email)){
        throw new Error("email is invalid")
    }else if(!password.length || password.length < 5){
        throw new Error("password is invalid")
    }
}

const ValidateEditProfileData = (req) => {
    try {
        const allowedUpdateData = ["firstName", "lastName", "about", "photoUrl", "skills"]
    
        const isEditAllowed = Object.keys(req.body).every(field => allowedUpdateData.includes(field))
        if(!isEditAllowed){
            throw new Error("Edit not allowed")
        }
        return true
    } catch (error) {
        return false 
    }
}

module.exports = {
    ValidateSignup,
    ValidateEditProfileData
}