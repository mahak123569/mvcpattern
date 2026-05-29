const Product = require("../models/productmodel");

// Controller contract:
// input: (req, res)
// output: JSON list of products or error
const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();

        if (!allProducts || allProducts.length === 0) {
            return res.status(200).json({
                success: true,
                products: [],
                message: "There are no products",
            });
        }

        return res.status(200).json({
            success: true,
            products: allProducts,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message || "server error",
        });
    }
};

module.exports = { getProducts };