// this routes will have user connection, requests, feed

const express = require("express")
const { UserAuth } = require("../middlewares/auth")
const ConnectionRequest = require("../models/connectionRequest")
const UserModel = require("../models/userModel")
const router = express.Router()

router.get("/user/requests", UserAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const requests = await ConnectionRequest.find({toUser: loggedInUser._id, status: "interested"}).populate("fromUser", ["firstName", "lastName", "email", "gender", "age"])
        res.status(200).json({message: "list of all the requests", data: requests})
    } catch (error) {
        res.status(500).json({messge: error.message})
    }
})

router.get("/user/connections", UserAuth, async (req, res) => {
    try {
        const loggedInUser = req.user
        const connections = await ConnectionRequest.find({"$or": [{"fromUser": loggedInUser._id}, {"toUser": loggedInUser._id}], status: "accepted"})
            .populate("fromUser", ["firstName", "lastName", "email", "gender", "age"])
            .populate("toUser", ["firstName", "lastName", "email", "gender", "age"]);

        const listOfFreinds = connections.map(connection => {
            const friend = connection.fromUser.equals(loggedInUser) ? connection.toUser : fromUser
            return friend
        })

        return res.status(200).json({message: "all your connections", data: listOfFreinds})
    } catch (error) {
        res.status(500).send("ERROR: "+ error.message)
    }
})

router.get("/user/feed", UserAuth, async (req, res) => {
    try {
        const loggedInUser = req.user

        // get all loggedInUser friends 
        const connections = await ConnectionRequest.find({
            "$or": [{"fromUser": loggedInUser._id}, {"toUser": loggedInUser._id}]
        })

        let listOfUsersToIgnore = connections.map(connection => {
            const friend = connection.fromUser.equals(loggedInUser._id) ? connection.toUser : connection.fromUser
            return friend
        })

        listOfUsersToIgnore = [loggedInUser._id, ...listOfUsersToIgnore]

        const users = await UserModel.find({"_id": {"$nin": listOfUsersToIgnore}}).select(["firstName", "lastName", "email", "gender", "age", "skills"])
        // get all the user which doesn't include the friends id
        res.status(200).json({message: "all your friends", data: users})
    } catch (error) {
        res.status(500).send("ERROR: " + error.message)
    }
})

module.exports = router