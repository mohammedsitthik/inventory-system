const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // 🔥 ADD THIS

const app = express();
app.use(express.json());
app.use(cors()); // 🔥 MUST ADD
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// MongoDB connect
mongoose.connect("mongodb://sitthik180222004_db_user:sitthik123@ac-fmmqaqe-shard-00-00.a2aoav1.mongodb.net:27017,ac-fmmqaqe-shard-00-01.a2aoav1.mongodb.net:27017,ac-fmmqaqe-shard-00-02.a2aoav1.mongodb.net:27017/?ssl=true&replicaSet=atlas-mlvl93-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
    res.send("Server Running 🚀");
});

// Server start
app.listen(5000, () => {
    console.log("Server running on port 5000 🔥");
});