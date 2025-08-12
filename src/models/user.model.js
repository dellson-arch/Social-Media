const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique : true,    //iska matlab do user ka username same nahi ho sakta isko hum bolte hai Schema level validation 
        required: true,
    },
    password : {
        type: String
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel