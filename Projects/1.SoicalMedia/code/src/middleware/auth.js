const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel")

const UserAuth = async (req, res, next) => {
    try {
        
        const cookies = req.cookies
        const { token } = cookies
    
        if(!token){
            throw new Error("Token not available")
        }
        
        let userID = ""
        jwt.verify(token, "socialMedia@123", function(err, decoded){
            if(err){
                throw new Error(err)
            }
            userID = decoded.userID
        })

        const user = await UserModel.findById({_id: userID})

        if(!user){
            throw new Error("Invalid Token")
        }
        req.user = user
        next()
    } catch (error) {
        res.status(401).send(error.message)
    }
}

module.exports = {
    UserAuth
}