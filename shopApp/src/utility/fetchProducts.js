const fetchProducts = async () =>
  fetch("https://fakestoreapi.com/products?limit=5")
    .then((response) => response.json())
    .then((json) => json);

export default fetchProducts;

// https://fakestoreapi.com/products
// https://fakestoreapi.com/products?limit={number} (1-20)
// https://fakestoreapi.com/products/category/{categoryName} (jewelery, electronics, men's clothing, women's clothing)
