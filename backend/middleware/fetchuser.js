const jwt = require('jsonwebtoken');

const JWT_SECRET = 'kalyani@developer';

const fetchuser = (req, res, next)=>{
    // Get the user from the JWT token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate with valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({error: "Please authenticate with valid token"})
    }
}

module.exports= fetchuser;