const express = require("express")
const UserModel = require("../models/userModel")
const { ValidateSignup } = require("../helpers/validators")
const { UserAuth } = require("../middlewares/auth")
const bcrypt = require("bcrypt")

const router = express.Router()

router.post("/signup", async (req, res)=> {
    try {
        //validate data
        ValidateSignup(req)
        const { password } = req.body
        // hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10)
        const data = req.body
        const user = new UserModel({...data, password: hashedPassword})
        await user.save()
        res.status(201).send("user added successfully")
    }catch(err) {
        res.status(500).send("error: "+ err.message)
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password }  = req.body

        const user = await UserModel.findOne({email: email})

        if(!user){
            throw new Error("Invalid credentials")
        }

        const isValidPassword = await user.validatePassword(password)
        if(!isValidPassword){
            throw new Error("Invalid credentials")
        }

        const token = user.getJWT()

        res.cookie("token", token, { expires: new Date(Date.now() + 3600000), httpOnly: true })
        res.status(200).send("logged in successfully")
    } catch (error) {
        res.status(500).send("ERROR: " + error.message)
    }
})


router.post("/logout", UserAuth, (req, res)=> {
    try {
        res.cookie("token", "", {expires: new Date(Date.now())})
        res.status(200).send("Logged out successfuly")
    } catch (error) {
        res.status(500).send("something went wrong")
    }
})

module.exports = router
