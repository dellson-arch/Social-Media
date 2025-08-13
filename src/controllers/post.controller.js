const postmodel = require('../models/post.model');
const generateCaption = require('../service/ai.service');
const uploadfile = require('../service/storage.service');
const {v4 : uuidv4} = require('uuid')
async function createPostController(req, res){
    const file = req.file; //req.file ke andar meri image ki puri file ka data aane wala hai 
    console.log("file received:", file);

    const base64Image = Buffer.from(file.buffer).toString('base64'); // ye line meri image ko base64 me convert karti hai


    // const caption = await generateCaption(base64Image); // ye line meri image ka caption generate karti hai
    // const result = await uploadfile(file.buffer , `${uuidv4()}` )

    const [caption , result] = await PromiseAll([
       generateCaption(base64Image),
       uploadfile(file.buffer , `${uuidv4()}` )
    ])
    
    const post = await postmodel.create({
        image:result.url,
        caption:caption ,
        user: req.user._id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
}

module.exports = {
    createPostController
}
// const base64Image = Buffer.from(file.buffer).toString('base64');
