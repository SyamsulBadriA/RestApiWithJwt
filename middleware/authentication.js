const{User} = require("../models")
const {verifyToken} = require("../helper/jwt")


async function authantication(req, res, next){
    try {
        const token = req.headers.authorization;
        const userDecoded = verifyToken(token);

        const user = await User.findOne({
        where : {
            id: userDecoded.id,
            username: userDecoded.username,
        }
            ,});

            if(!user){
                return res.status(401).json({
                    messgae : "invalid user id",
                });
            }
                res.dataUser = user;

                return next();
            
            

    } catch (error) {
        res.status(401).json(error);
    }
}

module.exports = authantication;