import React from "react";
import Selection from "./Selection";
import Product from "./Product";
import fetchExchangeRates from "../utility/fetchEchangeRates";
import fetchProducts from "../utility/fetchProducts";

class ShopApp extends React.Component {
  state = {
    amount: 1,
    currencies: [],
    products: [],
    categories: [],
    selectedProduct: {},
    selectedCategory: {},
    selectedCurrency: {},
  };

  static defaultProps = {
    currencies: [
      {
        id: 0,
        title: "PLN",
        rate: 1,
      },
      {
        id: 1,
        title: "EUR",
        rate: 0.22,
      },
      {
        id: 2,
        title: "USD",
        rate: 0.24,
      },
      {
        id: 3,
        title: "GBP",
        rate: 0.2,
      },
    ],
  };

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleCategorySelect = (e) => {
    this.setState({
      ...this.state,
      selectedCategory: this.state.categories[e.target.value],
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

  handleCurrencySelect = (e) => {
    this.setState({
      ...this.state,
      selectedCurrency: this.state.currencies[e.target.value],
    });
  };

  componentDidMount = async () => {
    const exchangeRatesData = await fetchExchangeRates();
    const productsData = await fetchProducts();

    const rates = { PLN: 1, ...exchangeRatesData.rates };
    const currencies = Object.entries(rates).map((currencyInfo, index) => ({
      id: index,
      title: currencyInfo[0],
      rate: currencyInfo[1],
    }));
    const productsToMap = [{ title: "-", category: "all" }, ...productsData];
    const products = productsToMap.map((product, index) => ({
      id: index,
      category: product.category,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
    }));

    const categoriesNames = new Set([
      "all",
      ...productsData.map((product) => product.category),
    ]);
    const categories = [...categoriesNames].map((category, index) => ({
      id: index,
      title: category,
    }));

    this.setState({
      ...this.state,
      products,
      currencies: currencies.length > 1 ? currencies : this.props.currencies,
      categories,
      selectedCurrency: currencies.length
        ? currencies[0]
        : this.props.currencies[0],
      selectedCategory: categories[0],
    });
    console.log(exchangeRatesData);
  };

  render() {
    const {
      selectedCurrency,
      amount,
      selectedProduct,
      currencies,
      products,
      categories,
      selectedCategory,
    } = this.state;
    const productsInCategory = () => {
      if (selectedCategory.title === "all") return products;
      else
        return [
          products[0],
          ...products.filter(
            (product) => product.category === selectedCategory.title
          ),
        ];
    };
    return (
      <div id="shop">
        <h1>Shop App</h1>
        <div id="selections">
          <Selection
            labelTitle={"Category:"}
            value={selectedCategory.id}
            handleOnChange={this.handleCategorySelect}
            items={categories}
          />
          <Selection
            labelTitle={"Product:"}
            value={selectedProduct.id}
            handleOnChange={this.handleProductSelect}
            items={productsInCategory()}
          />
        </div>
        <Product
          selectedCurrency={selectedCurrency}
          selectedProduct={selectedProduct}
          currencies={currencies}
          amount={amount}
          handleAmountChange={this.handleAmountChange}
          handleCurrencySelect={this.handleCurrencySelect}
        />
      </div>
    );
  }
}
export default ShopApp;
