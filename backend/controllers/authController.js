const User = require("../models/userModel");

// ================= REGISTER =================
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // check user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists"
      });
    }

    // create user
    const newUser = new User({
      name,
      email,
      password,
      role
    });

    await newUser.save();

    res.json({
      success: true,
      message: "Registered successfully"
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "Server error"
    });
  }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User not found ❌"
      });
    }

    if (user.password !== password) {
      return res.json({
        success: false,
        message: "Wrong password ❌"
      });
    }

    res.json({
      success: true,
      message: "Login success ✅",
      user
    });

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Server error ❌" });
  }
};