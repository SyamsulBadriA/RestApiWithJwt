const {Product} = require("../models")

class ProductController {

    static async getAllProduct (req, res){
        try {
            
            const dataProducts = await Product.findAll();

            res.status(200).json(dataProducts);
        } catch (error) {
            res.status(500).json({message: error.message});
        } 
    } 
    static async getProductById (req, res){
      const productId = req.params.id;

        
        try {
            
            const dataProduct = await Product.findOne({
                where: {
                    id: +productId,
                }
            });

            res.status(200).json(dataProduct);
        } catch (error) {
            res.status(500).json({message: error.message});
        } 
    } 
}

module.exports = ProductController;