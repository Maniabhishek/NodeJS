const express = require("express")
const { UserAuth } = require("../middlewares/auth")
const ConnectionRequestModel = require("../models/connectionRequest")
const UserModel = require("../models/userModel")
const router = express.Router()

router.post("/request/send/:status/:userid", UserAuth, async (req, res) => {
    try {
        const user = req.user
        const toUserId = req.params.userid
        const status = req.params.status

        const allowedStatus = ["ignored", "interested"]
        if(!allowedStatus.includes(status)){
            return res.status(400).json({message: "Invalid status"})
        }

        const touser = await UserModel.findById({_id: toUserId})
        if(!touser){
            return res.status(400).json({message: `user with id ${toUserId} doesn't exists`})
        }

        const existingUserRequest = await ConnectionRequestModel.findOne({
            "$or": [
                {toUser: toUserId, fromUser: user._id},
                {fromUser: toUserId, toUser: user._id}
            ]
        })
        
        if(existingUserRequest){
            return res.status(400).json({message: `request already exist`})
        }

        const request = new ConnectionRequestModel({
            fromUser: user._id,
            toUser: toUserId,
            status: status
        })

        const data = await request.save()
        res.status(200).json({message: `your request for ${status} for user ${toUserId}`, data: data})
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post("/request/review/:status/:requestId", UserAuth, async (req, res)=> {
    try {
        const requestId = req.params.requestId
        const loggedInUser = req.user
        const status = req.params.status

        const allowedStatus = ["accepted", "rejected"]

        const isStatusAllowed = allowedStatus.includes(status)
        if(!isStatusAllowed){
            return res.status(400).json({message: `status ${status} is not allowed`})
        }

        const request = await ConnectionRequestModel.findOne({_id: requestId, toUser: loggedInUser._id, status: "interested"})
        if(!request){
            return res.status(400).json({message: "request doesn't exist"})
        }

        // can be accepted or rejected only if request is in interested state, nothing will be done for ignored state
        if(!request) {
            return res.status(404).json({message: "request doesn't exist"})
        }

        request.status = status

        const data = await request.save()

        return res.status(200).json({message: `request is accepted ${status}`, data})
    } catch (error) {
        res.status(500).send(`ERROR: ${error.message}`)
    }
})

module.exports = router
