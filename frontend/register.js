const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

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

    if (data.success) {
      alert("Registered Successfully ✅");
      window.location.href = "login.html";
    } else {
      alert(data.message);
    }

  } catch (err) {
    console.log(err);
    alert("Server error ❌");
  }
});