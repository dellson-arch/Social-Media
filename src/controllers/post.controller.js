const postmodel = require('../models/post.model');
const generateCaption = require('../service/ai.service');

async function createPostController(req, res){
    const file = req.file; //req.file ke andar meri image ki puri file ka data aane wala hai 
    console.log("file received:", file);

    const base64Image = Buffer.from(file.buffer).toString('base64'); // ye line meri image ko base64 me convert karti hai
    const caption = await generateCaption(base64Image); // ye line meri image ka caption generate karti hai

    res.json({
        caption
    })
}

module.exports = {
    createPostController
}
// const base64Image = Buffer.from(file.buffer).toString('base64');