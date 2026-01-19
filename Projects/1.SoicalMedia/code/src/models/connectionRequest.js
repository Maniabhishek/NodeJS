const mongoose = require("mongoose")

const connectionRequestSchema = new mongoose.Schema({
    fromUser: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    toUser: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    status: {
        type: String,
        enum: {
            values: ["ignored", "accepted", "rejected", "interested"],
            message: '{VALUE} is not supported'
        },
        required: true
    }
}, {timestamps: true})

connectionRequestSchema.index({fromUser: 1, toUser: 1})

connectionRequestSchema.pre('save', function(next){
    if(this.fromUser.equals(this.toUser)){
        throw new Error("you cannot send connection request to yourself")
    }
    next()
}) 

const ConnectionModel = mongoose.model("ConnectionRequest", connectionRequestSchema)

module.exports = ConnectionModel
