const jwt = require("jsonwebtoken")

function Validator(req,res,next){
    const {authorization} = req.headers;
    // console.log(authorization);
    const authToken = authorization.split(" ")[1];

    const decoded = jwt.verify(authToken,process.env.JWT_ACCESS_TOKEN);
    if(decoded){
        return next();
    }
    return res.json({
        message:"Forbidden"
    })
}

module.exports = Validator;