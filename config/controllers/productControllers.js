const Product = require("../models/productmodel");


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
const createProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;
        const newProduct = new Product({ name, price, description, category });

        await newProduct.save();

        return res.status(200).json({
            product: newProduct,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message || "server error",
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        console.log("PUT REQUESTED")
        const { id } = req.params;
        const { name, price, description, category } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, description, category },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.status(200).json({
            product: updatedProduct
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message || "server error",
        });
    }
};

module.exports = { getProducts, createProduct, updateProduct };
