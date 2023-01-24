import "./product.css";
import Counter from "../counter/Counter";
import Amount from "../amount/Amount";
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
          handleCurrencySelect={handleCurrencySelect}
          currencies={currencies}
        />
        <Amount
          amount={amount}
          selectedProductAmount={selectedProduct.amount}
          handleAmountChange={handleAmountChange}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
          handleAddToBasketButton={handleAddToBasketButton}
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
