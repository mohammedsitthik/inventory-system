const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

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

    if (data.success) {
      alert("Login Successful ✅");

      // 🔥 role-based redirect
      if (data.user.role === "shopkeeper") {
        window.location.href = "shopkeeper-dashboard.html";
      } else {
        window.location.href = "customer-dashboard.html";
      }

    } else {
      alert(data.message);
    }

  } catch (err) {
    console.log(err);
    alert("Server error ❌");
  }
});