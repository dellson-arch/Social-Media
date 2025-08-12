const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');

async function authmiddleware (req, res , next) {
    const token = req.cookies.token;
 
    if(!token){
        res.status(401).json({
            message : 'Unauthorized, please login first'
        })
    }

  try {
      const decoded = jwt.verify(token , process.env.JWT_SECRET);
      
      const user = userModel.findOne({
        _id: decoded.id
      })

      req.user = user;
      next();

  } catch (error) {
    return res.status(401).json({
        message: 'Invalid token, please login again'
    });
  }

}

module.exports = authmiddleware;