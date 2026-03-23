const db = require("../config/db");

// ✅ ADD PRODUCT
const addProduct = (req, res) => {
  const { product_name, price, quantity, shopkeeper_id } = req.body;

  const sql =
    "INSERT INTO products (product_name, price, quantity, shopkeeper_id) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [product_name, price, quantity, shopkeeper_id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Product add failed ❌",
        });
      }

      res.json({
        message: "Product added successfully ✅",
      });
    }
  );
};

// ✅ GET PRODUCTS
const getProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Fetch failed ❌",
      });
    }

    res.json(result);
  });
};

// ✅ EXPORT (VERY IMPORTANT)
module.exports = {
  addProduct,
  getProducts,
};