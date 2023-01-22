import React from "react";
import Header from "./Header";
import Product from "./Product";
import AddedProduct from "./AddedProduct";
import ShoppingBasket from "./ShoppingBasket";
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
    shoppingBasketProducts: [],
    shoppingBasketActive: false,
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
      shoppingBasketActive: false,
    });
  };

  handleCurrencySelect = (e) => {
    this.setState({
      ...this.state,
      selectedCurrency: this.state.currencies[e.target.value],
    });
  };

  handleMinusClick = () => {
    this.setState({
      ...this.state,
      amount: this.state.amount - 1,
    });
  };

  handlePlusClick = () => {
    this.setState({
      ...this.state,
      amount: this.state.amount + 1,
    });
  };

  handleAddToBasketButton = () => {
    const selectedProduct = this.state.selectedProduct.map();
    this.setState({
      ...this.state,
    });
  };

  handleShoppingBasketButton = () => {
    this.setState({
      ...this.state,
      selectedCategory: this.state.categories[0],
      selectedProduct: this.state.products[0],
      shoppingBasketActive: true,
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
      amount: Math.floor(Math.random() * 10),
    }));

    console.log(products);

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
      shoppingBasketProducts,
      shoppingBasketActive,
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
        <Header
          labelTitle1={"Category:"}
          value1={selectedCategory.id}
          handleOnChange1={this.handleCategorySelect}
          items1={categories}
          labelTitle2={"Product:"}
          value2={selectedProduct.id}
          handleOnChange2={this.handleProductSelect}
          items2={productsInCategory()}
          handleShoppingBasketButton={this.handleShoppingBasketButton}
        />
        <Product
          selectedCurrency={selectedCurrency}
          selectedProduct={selectedProduct}
          currencies={currencies}
          amount={amount}
          handleAmountChange={this.handleAmountChange}
          handleCurrencySelect={this.handleCurrencySelect}
          handleMinusClick={this.handleMinusClick}
          handlePlusClick={this.handlePlusClick}
        />
        <ShoppingBasket
          shoppingBasketActive={shoppingBasketActive}
          shoppingBasketProducts={shoppingBasketProducts}
        />
        <AddedProduct />
      </div>
    );
  }
}
export default ShopApp;
