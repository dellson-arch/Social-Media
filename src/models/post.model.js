const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image : "String",
    caption : "String",
    user:{
        type:mongoose.Schema.Types.ObjectId,  //jab hum idhar pe kisi ki id store karte hai tab ye line likhte hai
        ref: 'users' // kon si collection se id nikalni hai
    }
})

const postModel = mongoose.model('posts', postSchema);

module.exports = postModel;