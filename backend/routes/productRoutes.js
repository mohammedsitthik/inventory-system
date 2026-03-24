const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");

// 🔥 ADD PRODUCT
router.post("/add", async (req, res) => {
  try {
    const { product_name, price, quantity, shopkeeper_id } = req.body;

    const newProduct = new Product({
      product_name,
      price,
      quantity,
      shopkeeper_id
    });

    await newProduct.save();

    res.json({ message: "Product added successfully ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Product add failed ❌" });
  }
});


// 🔥 GET PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fetch failed ❌" });
  }
});

module.exports = router;