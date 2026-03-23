function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    console.log("Register clicked");

    fetch("http://127.0.0.1:5003/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password, role })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        if (data.success) {
            alert("Registered successfully ✅");
            window.location.href = "login.html";
        } else {
            alert(data.message);
        }
    })
    .catch(err => {
        console.log(err);
        alert("Server error ❌");
    });
}