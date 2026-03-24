const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("input[placeholder='Email']").value;
  const password = document.querySelector("input[placeholder='Password']").value;
  const role = document.querySelector("select").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, role })
    });

    const data = await res.json();

    if (data.success) {
      alert("Login Success ✅");

      // save user
      localStorage.setItem("user", JSON.stringify(data.user));

      // redirect based on role
      if (role === "customer") {
        window.location.href = "customer-dashboard.html";
      } else {
        window.location.href = "shopkeeper-dashboard.html";
      }

    } else {
      alert(data.message);
    }

  } catch (err) {
    console.log(err);
    alert("Server error ❌");
  }
});