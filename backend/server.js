const express = require("express");
const cors = require("cors");

// routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server working 🚀");
});

// start server
const PORT = 5003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
