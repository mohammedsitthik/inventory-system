const db = require("../config/db");

// ADD PRODUCT
exports.addProduct = (req, res) => {
  const { product_name, price, quantity, shopkeeper_id } = req.body;

  const sql = "INSERT INTO products (product_name, price, quantity, shopkeeper_id) VALUES (?, ?, ?, ?)";

  db.query(sql, [product_name, price, quantity, shopkeeper_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Product add failed" });
    }
    res.json({ message: "Product added successfully ✅" });
  });
};

// GET PRODUCTS
exports.getProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Fetch failed" });
    }
    res.json(result);
  });
};




const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.post("/add", productController.addProduct);

module.exports = router;