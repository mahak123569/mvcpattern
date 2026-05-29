const product  = require("../models/productModel");
const getProducts = async(requestAnimationFrame,res)=>{
    try{
        const allproducts = product.find();
        if(!allproducts){
            res.json({
                message:"There is NO product"
            })
        }
        res.status(200).json({
            success:true,
            products:allproducts,
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"server error"                                        
        })
    }
}
module.exports = {getProducts}