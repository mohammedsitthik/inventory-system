document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    // ✅ success check
    if (res.ok) {

      alert("Login Successful ✅");

      // save user
      localStorage.setItem("user", JSON.stringify(data.user));

      // 🔥 role-based redirect
      if (data.user.role === "shopkeeper") {
        window.location.href = "shopkeeper-dashboard.html";
      } 
      else if (data.user.role === "customer") {
        window.location.href = "customer-dashboard.html";
      } 
      else {
        alert("Unknown role ❌");
      }

    } else {
      alert(data.message || "Login Failed ❌");
    }

  } catch (err) {
    console.log(err);
    alert("Server error ❌");
  }
});