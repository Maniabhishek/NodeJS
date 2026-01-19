const express = require("express")
const {AdminAuth, UserAuth} = require("./middlewares/auth")
const ConnectToDb = require("./config/database")
const UserModel = require("./models/userModel")
const { ValidateSignup } = require("./helpers/validators")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const authRouter = require('./routes/auth')
const profileRouter = require('./routes/profile')
const requestRouter = require('./routes/request')
const UserRouter = require('./routes/user')

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)
app.use("/", UserRouter)
app.use("/", (req, res)=> {
    console.log('first....')
    return res.status(400).send("unsupported route")
})

ConnectToDb().then(()=> {
    console.log("Db connected successfully")
    app.listen("3000", (err)=> {
        console.log('running on port 3000')
    })
}).catch((err) => {
    console.log("error from database....", err)
})
