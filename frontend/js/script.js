// ================= PAGE LOAD =================
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready ✅");

  // ================= ADD PRODUCT =================
  const form = document.getElementById("productForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const product_name = document.getElementById("product_name").value;
      const price = document.getElementById("price").value;
      const quantity = document.getElementById("quantity").value;

      // get logged user
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please login first ❌");
        return;
      }

      const data = {
        product_name,
        price,
        quantity,
        shopkeeper_id: user._id   // 🔥 MongoDB user id
      };

      try {
        const res = await fetch("http://localhost:5000/api/products/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        const result = await res.json();

        alert(result.message);

      } catch (err) {
        console.log(err);
        alert("Error ❌");
      }
    });
  }

  // ================= GET PRODUCTS =================
  const productList = document.getElementById("productList");

  if (productList) {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        console.log("products:", data);

        productList.innerHTML = "";

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

});