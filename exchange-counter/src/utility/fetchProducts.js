const fetchProducts = async () =>
  fetch("https://fakestoreapi.com/products?limit=5")
    .then((response) => response.json())
    .then((json) => json);

export default fetchProducts;
