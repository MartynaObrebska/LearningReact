import Counter from "../../counter/Counter";
import "./summary.css";

const Summary = (props) => {
  const {
    products,
    selectedCurrency,
    handleCurrencySelect,
    currencies,
    handleAmountChangeClick,
    handleAddToBasketButton,
    handleAmountChange,
  } = props;
  const prices = products.map((product) => product.price * product.selected);
  const total = [...prices].reduce((acc, val) => acc + val, 0);
  if (products.filter((product) => product.activeBasket)) {
    return (
      <h2 id="summary">
        <span className="price">Total price:</span>
        <Counter
          amount="1"
          price={total}
          selectedCurrency={selectedCurrency}
          handleCurrencySelect={handleCurrencySelect}
          currencies={currencies}
          handleAmountChange={handleAmountChange}
          handleAmountChangeClick={handleAmountChangeClick}
          handleAddToBasketButton={handleAddToBasketButton}
        />
      </h2>
    );
  }
};

export default Summary;
