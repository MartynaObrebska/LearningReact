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
      handleAmountChangeClick,
      handleAddToBasketButton,
    } = props;
    const { title, category, image, description, price } = selectedProduct;
    return (
      <div id="product">
        <h2>{title}</h2>
        <h3 id="category">{category}</h3>
        <img alt={title} src={image}></img>
        <p>{description}</p>
        <span className="price">Price:</span>
        <Counter
          amount={amount}
          price={price}
          selectedCurrency={selectedCurrency}
          handleCurrencySelect={handleCurrencySelect}
          currencies={currencies}
          selectedProduct={selectedProduct}
          handleAmountChange={handleAmountChange}
          handleAmountChangeClick={handleAmountChangeClick}
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
