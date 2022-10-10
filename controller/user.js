const {User} = require("../models");
const {generateToken} = require("../helper/jwt");
const {hashPassword,comparePassword} = require("../helper/bcrypt");


class UserController{
  static async userLogin(req,res) {
        const {username, password}= req.body; 

try{
  const dataUser = await User.findOne({
    where: {
        username: username,
    },
    });

    if (dataUser){
        const isCorrect = comparePassword(password, dataUser.password);

       

    if(isCorrect){
        const token = generateToken({
         id : dataUser.id,
         username : dataUser.username,
     });
            res.status(200).json({token});
        }else{
            res.status(400).json({message:"password salah"});
        }
    }else{
        res.status(400).json({message:"Username Tidak ada"});
    }
}catch(error){
    res.status(500).json(error);
}
    }

  static async createUser(req, res) {
        const {username, password} = req.body;
        // const hashedPassword = hashPassword(password);
try{
  const user = await User.create({username,password});

   res.status(201).json({message:"success create user"});
}catch(error){
    res.status(500).json(error);
}
    }
}

module.exports=UserController;