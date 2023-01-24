import Counter from "../../counter/Counter";
import "./summary.css";

const Summary = (props) => {
  const {
    shoppingBasketProducts,
    selectedCurrency,
    handleCurrencySelect,
    currencies,
  } = props;
  const prices = shoppingBasketProducts.map(
    (product) => product.price * product.amount
  );
  const total = [...prices].reduce((acc, val) => acc + val, 0);
  if (shoppingBasketProducts[0]) {
    return (
      <h2 id="summary">
        <Counter
          amount="1"
          price={total}
          selectedCurrency={selectedCurrency}
          handleCurrencySelect={handleCurrencySelect}
          currencies={currencies}
        />
      </h2>
    );
  }
};

export default Summary;
