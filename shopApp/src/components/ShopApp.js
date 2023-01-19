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
    selectedProduct: {},
  };

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
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
    const products = productsData.map((product, index) => ({
      id: index,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
    }));
    this.setState({
      ...this.state,
      selectedProduct: products[0],
      currencies,
      products,
    });
  };

  render() {
    const { amount, selectedProduct, currencies, products } = this.state;
    const optionalProducts = products.map((product) => {
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
          chooseProductValue={selectedProduct.id}
          chooseProductHandleSelect={this.handleSelect}
          chooseProductOptions={optionalProducts}
          inputValue={amount}
          inputHandleAmountChange={this.handleAmountChange}
        />
        <Product
          title={selectedProduct.title}
          img={selectedProduct.image}
          description={selectedProduct.description}
          count={amount}
          price={selectedProduct.price}
          currencies={currencies}
          selectedProduct={selectedProduct}
        />
      </div>
    );
  }
}
export default ShopApp;
