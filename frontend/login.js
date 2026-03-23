function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    console.log("Clicked"); // debug

    fetch("http://localhost:5003/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, role })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("Login success ✅");
        } else {
            alert(data.message);
        }
    })
    .catch(err => {
        console.log(err);
        alert("Server error ❌");
    });
}