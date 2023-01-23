import "./product.css";
import Counter from "../counter/Counter";
const Product = (props) => {
  if (props.selectedProduct.image) {
    const {
      selectedCurrency,
      amount,
      handleAmountChange,
      selectedProduct,
      currencies,
      handleCurrencySelect,
      handleMinusClick,
      handlePlusClick,
      handleAddToBasketButton,
    } = props;
    const { title, category, image, description, price } = selectedProduct;
    return (
      <div id="product">
        <h2>{title}</h2>
        <h3 id="category">{category}</h3>
        <img alt={title} src={image}></img>
        <p>{description}</p>
        <Counter
          amount={amount}
          price={price}
          selectedCurrency={selectedCurrency}
          selectedProductAmount={selectedProduct.amount}
          handleCurrencySelect={handleCurrencySelect}
          currencies={currencies}
          handleAmountChange={handleAmountChange}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
        />
        <button
          id="add"
          onClick={handleAddToBasketButton}
          disabled={amount ? false : true}
          className={amount ? "" : "disabled"}
        >
          Add
        </button>
      </div>
    );
  }
};

export default Product;
