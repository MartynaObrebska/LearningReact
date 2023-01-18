import React from "react";
import Counter from "./Counter";
import fetchExchangeRates from "../utility/fetchEchangeRates";
import fetchProducts from "../utility/fetchProducts";

class ExchangeCounter extends React.Component {
  state = {
    selectedProduct: this.props.products[0],
    amount: "",
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
  };

  static defaultProps = {
    products: [
      {
        id: 0,
        name: "electricity",
        price: 0.94,
        suffix: "kWh",
      },
      {
        id: 1,
        name: "gas",
        price: 7.69,
        suffix: "l",
      },
      {
        id: 2,
        name: "oranges",
        price: 5.43,
        suffix: "kg",
      },
    ],
  };

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
    const selectedProduct = this.props.products.find(
      (product) => product.id === Number(e.target.value)
    );
    this.setState({
      selectedProduct: selectedProduct,
    });
  };

  suffixChange = () => this.state.selectedProduct.suffix;

  componentDidMount = async () => {
    const exchangeRatesData = await fetchExchangeRates();
    const rates = { PLN: 1, ...exchangeRatesData.rates };
    const currencies = Object.entries(rates).map((currencyInfo, index) => ({
      id: index,
      code: currencyInfo[0],
      rate: currencyInfo[1],
    }));
    const productsData = await fetchProducts();
    console.log();
    this.setState({
      ...this.state,
      currencies,
    });
  };

  render() {
    const { products } = this.props;
    const { amount, selectedProduct, currencies } = this.state;
    const optionalProducts = products.map((product) => {
      return (
        <option key={product.id} value={product.id}>
          {product.name}
        </option>
      );
    });
    const counters = currencies.map((currency) => (
      <Counter
        key={currency.id}
        name={currency.name}
        rate={currency.rate}
        code={currency.code}
        count={amount}
        price={selectedProduct.price}
      />
    ));

    return (
      <div id="exchangeCounter">
        <h1>Exchange Counter</h1>
        <label>
          Choose product:
          <select value={selectedProduct.id} onChange={this.handleSelect}>
            {optionalProducts}
          </select>
        </label>
        <label>
          <input
            placeholder="Type amount..."
            type="number"
            value={amount}
            onChange={this.handleAmountChange}
          />
          {this.suffixChange()}
        </label>
        <h2>Currencies:</h2>
        <div id="counters">{counters}</div>
      </div>
    );
  }
}
export default ExchangeCounter;
