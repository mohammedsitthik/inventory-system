// ================= REGISTER =================
async function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!name || !email || !password) {
    alert("Fill all fields ❌");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password, role })
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      window.location.href = "login.html";
    }

  } catch (err) {
    console.log(err);
    alert("Server error ❌");
  }
}

// ================= LOGIN =================
async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Fill all fields ❌");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {

      // 🔥 user save pannrom
      localStorage.setItem("user", JSON.stringify(data.user));

      // 🔥 role based redirect
      if (data.user.role === "shopkeeper") {
        window.location.href = "shopkeeper-dashboard.html";
      } else {
        window.location.href = "customer-dashboard.html";
      }
    }

  } catch (err) {
    console.log(err);
    alert("Server error ❌");
  }
}