import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      handleShoppingBasketButton,
    } = props;
    const { title, category, image, description, price } = selectedProduct;
    return (
      <div id="product">
        <h2>{title}</h2>
        <h3 id="category">{category}</h3>
        <img alt={title} src={image}></img>
        <p>{description}</p>
        <Counter
          labelName="Price:"
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
        {selectedProduct.activeBasket ? (
          <>
            <p>Item already in the basket!</p>
            <button
              className="shoppingBasket"
              onClick={handleShoppingBasketButton}
            >
              <FontAwesomeIcon icon="shopping-basket" />
              Go to shopping basket
            </button>
          </>
        ) : (
          <button
            id="add"
            onClick={handleAddToBasketButton}
            disabled={amount ? false : true}
            className={amount ? "" : "disabled"}
          >
            Add
          </button>
        )}
      </div>
    );
  }
};

export default Product;
