const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("input[placeholder='Name']").value;
  const email = document.querySelector("input[placeholder='Email']").value;
  const password = document.querySelector("input[placeholder='Password']").value;
  const role = document.querySelector("select").value;

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