import React from "react";
import Selection from "./Selection";
import Product from "./Product";
import fetchExchangeRates from "../utility/fetchEchangeRates";
import fetchProducts from "../utility/fetchProducts";

class ShopApp extends React.Component {
  state = {
    amount: 1,
    currencies: [
      {
        id: 0,
        name: "zloty",
        rate: 1,
        code: "PLN",
      },
      {
        id: 1,
        name: "euro",
        rate: 4.71,
        code: "EUR",
      },
      {
        id: 2,
        name: "dollars",
        rate: 4.34,
        code: "USD",
      },
      {
        id: 3,
        name: "paunds",
        rate: 5.35,
        code: "GBP",
      },
    ],
    products: [],
    categories: [],
    selectedProduct: {},
    selectedCategory: "all",
  };

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleCategorySelect = (e) => {
    this.setState({
      ...this.state,
      selectedCategory: e.target.value,
      selectedProduct: this.state.products[0],
    });
  };

  handleProductSelect = (e) => {
    const selectedProduct = this.state.products.find(
      (product) => product.id === Number(e.target.value)
    );
    this.setState({
      ...this.state,
      selectedProduct,
      amount: 1,
    });
  };

  componentDidMount = async () => {
    const exchangeRatesData = await fetchExchangeRates();
    const rates = { PLN: 1, ...exchangeRatesData.rates };
    const currencies = Object.entries(rates).map((currencyInfo, index) => ({
      id: index,
      code: currencyInfo[0],
      rate: currencyInfo[1],
    }));
    const productsData = await fetchProducts();
    const productsToMap = [{ title: "-", category: "all" }, ...productsData];
    const products = productsToMap.map((product, index) => ({
      id: index,
      category: product.category,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
    }));
    const productsCategories = [
      "all",
      ...products.map((product) => product.category),
    ];
    const categories = [...new Set(productsCategories)];
    this.setState({
      ...this.state,
      selectedProduct: products[0],
      currencies,
      categories,
      products,
    });
  };

  render() {
    const {
      amount,
      selectedProduct,
      currencies,
      products,
      categories,
      selectedCategory,
    } = this.state;
    const optionalCategories = categories.map((category, index) => {
      return (
        <option key={index} value={category}>
          {category}
        </option>
      );
    });
    const productsInCategory = () => {
      if (selectedCategory === "all") return products;
      else
        return [
          products[0],
          ...products.filter(
            (product) => product.category === selectedCategory
          ),
        ];
    };
    const optionalProducts = productsInCategory().map((product) => {
      return (
        <option key={product.id} value={product.id}>
          {product.title}
        </option>
      );
    });
    return (
      <div id="shop">
        <h1>Shop App</h1>
        <Selection
          categoryValue={selectedCategory}
          optionalCategories={optionalCategories}
          handleCategorySelect={this.handleCategorySelect}
          productValue={selectedProduct.id}
          handleProductSelect={this.handleProductSelect}
          productOptions={optionalProducts}
          amountValue={amount}
          handleAmountChange={this.handleAmountChange}
        />
        <Product
          selectedProduct={selectedProduct}
          title={selectedProduct.title}
          img={selectedProduct.image}
          description={selectedProduct.description}
          price={selectedProduct.price}
          category={selectedProduct.category}
          count={amount}
          currencies={currencies}
        />
      </div>
    );
  }
}
export default ShopApp;
