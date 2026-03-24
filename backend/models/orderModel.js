const Product = require("../models/productModel");

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.json({ success: true, message: "Product added ✅" });

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Server error ❌" });
  }
};

// GET PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);

  } catch (err) {
    console.log(err);
    res.json([]);
  }
};