// REGISTER
function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5003/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      window.location.href = "login.html";
    })
    .catch(err => console.log(err));
}


// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5003/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);

      if (data.success) {
        window.location.href = "shopkeeper-dashboard.html";
      }
    })
    .catch(err => console.log(err));
}


async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5003/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  alert(data.message);

  if (data.success) {
    window.location.href = "customer-dashboard.html";
  }
}




async function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5003/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();

  alert(data.message);

  if (data.success) {
    window.location.href = "login.html";
  }
}