document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";
  document.querySelector(".products").appendChild(productContainer);

  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      allProducts = data.products.slice(0, 10);

      renderProducts(allProducts);
    });

  function renderProducts(products) {
    productContainer.innerHTML = "";
    products.forEach((product) => {
      const productdiv = document.createElement("div");
      productdiv.className = "product";
      const title = document.createElement("h3");
      title.textContent = product.title;
      const description = document.createElement("p");
      description.textContent = product.description;
      const price = document.createElement("p");
      price.textContent = `Harga: $${product.price}`;
      const rating = document.createElement("p");
      rating.textContent = `Rating: ${product.rating}`;
      const image = document.createElement("img");
      image.src = product.thumbnail;
      image.style.width = "140px";

      productdiv.appendChild(title);
      productdiv.appendChild(image);
      productdiv.appendChild(description);
      productdiv.appendChild(price);
      productdiv.appendChild(rating);

      productContainer.appendChild(productdiv);
    });
  }

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === "") {
      renderProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
      renderProducts(filteredProducts);
    }
  });
});
