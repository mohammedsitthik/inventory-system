const db = require("../config/db");


// ================= REGISTER =================
exports.register = (req, res) => {
  const { name, email, password, role } = req.body;

  // check user already exists
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.json({ success: false, message: "Server error" });
      }

      if (result.length > 0) {
        return res.json({ success: false, message: "User already exists" });
      }

      // insert user
      db.query(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, password, role],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.json({ success: false, message: "Server error" });
          }

          res.json({ success: true, message: "Registered successfully" });
        }
      );
    }
  );
};



// ================= LOGIN =================
exports.login = (req, res) => {
  const { email, password, role } = req.body;

  console.log("LOGIN DATA:", email, password, role);

  db.query(
    "SELECT * FROM users WHERE email = ? AND role = ?",
    [email, role],
    (err, result) => {
      if (err) {
        console.log("DB ERROR:", err);
        return res.json({ success: false, message: "Server error" });
      }

      if (!result || result.length === 0) {
        return res.json({ success: false, message: "Invalid credentials" });
      }

      const user = result[0];

      console.log("DB USER:", user);

      // password check
      if (user.password != password) {
        return res.json({ success: false, message: "Invalid credentials" });
      }

      res.json({
        success: true,
        message: "Login success",
        user: user
      });
    }
  );
};