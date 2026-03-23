console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready");

  const form = document.getElementById("productForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      console.log("clicked 🔥");

      const product_name = document.getElementById("product_name").value;
      const price = document.getElementById("price").value;
      const quantity = document.getElementById("quantity").value;

      const data = {
        product_name,
        price,
        quantity,
        shopkeeper_id: 1
      };

      console.log("sending:", data);

      try {
        const res = await fetch("http://localhost:5000/api/products/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        const result = await res.json();
        console.log(result);

        alert(result.message);

      } catch (err) {
        console.error(err);
        alert("Error ❌");
      }
    });
  } else {
    console.log("form not found ❌");
  }
});


// GET PRODUCTS (Customer Dashboard)
const productList = document.getElementById("productList");

if (productList) {
  fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(data => {
      console.log("products:", data);

      data.forEach(product => {
        const div = document.createElement("div");

        div.innerHTML = `
          <h3>${product.product_name}</h3>
          <p>Price: ₹${product.price}</p>
          <p>Quantity: ${product.quantity}</p>
          <hr>
        `;

        productList.appendChild(div);
      });
    })
    .catch(err => console.log(err));
}


document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data);

    if (data.success) {
      alert("Login success ✅");
      window.location.href = "shopkeeper-dashboard.html";
    } else {
      alert("Login failed ❌");
    }

  } catch (err) {
    console.log(err);
    alert("Server error ❌");
  }
});

