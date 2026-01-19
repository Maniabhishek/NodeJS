const mongoose = require('mongoose')

const ConnectToDb = async ()=> {
    await mongoose.connect("mongodb://localhost:27017/SocialMedia")
}

module.exports = ConnectToDb