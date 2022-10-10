const {Product} = require("../models");

async function authorization(req,res,next){
    try {
    const productId = req.params.id;
    const idUser =  res.dataUser.id;

    const product = await Product.findOne({
        where:{
            id: +productId,
        },
    });
    if (!product) {
       return res.status(404).json({message: "Product not found"});
    }

    if (product.userId === idUser) {
        return next();
    } else {
        return res.status(403).json({
            message: "Forbidden",
        });
    }

} catch (error) {
    res.status(500).json(error);
  }
}
module.exports = authorization;
