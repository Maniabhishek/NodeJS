const express = require("express")
const { UserAuth } = require("../middlewares/auth")
const { ValidateEditProfileData } = require("../helpers/validators")
const bcrypt = require("bcrypt")

const router = express.Router()

router.get("/profile/view", UserAuth, (req, res)=> {
    try {
        const user = req.user
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send("ERROR: "+ error.message)
    }
})

router.patch("/profile/edit", UserAuth, async (req, res)=> {
    try {
        const isValidData = ValidateEditProfileData(req)
        if(!isValidData){
            throw new Error("not valid data")
        }

        const loggedInUser = req.user

        const isNotDataChanged = Object.keys(req.body).every(field => req.body[field] === loggedInUser[field]);
        if(isNotDataChanged){
            return res.status(200).json({data: loggedInUser})
        }

        console.log('data is changed')

        Object.keys(req.body).forEach(key => loggedInUser[key] = req.body[key])

        await loggedInUser.save()

        res.status(200).json({data: loggedInUser})
    } catch (error) {
        res.status(500).send("ERROR: " + error.message)
    }
})

router.patch("/profile/password", UserAuth, async (req, res)=> {
    try {
        const password = req.body.password
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = req.user
        user.password = hashedPassword
        user.save()
        res.cookie("token", null, {expires: new Date(Date.now())}).status(200).send("password updated successfuly")
    } catch (error) {
        res.status(500).send("ERROR: "+ error.message)
    }
})

module.exports = router
