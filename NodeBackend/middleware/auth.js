const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    /* Get token from header */
    const token = req.header('x-auth-token');
    /* check if token is given or not */ 
    if(!token){
        return res.status(400).json({"msg":"Token is required"});
    }

    /* Verify the token */
    try{
        let decoded = jwt.verify(token, '123456');
        req.user = decoded.user;
        next();
    }
    catch(err){
        res.status(401).json({"msg": "Unauthorized"});
    }
    
}