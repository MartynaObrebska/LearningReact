// import "./counter.css";
// import Selection from "../selection/Selection";

// const Counter = (props) => {
//   const { amount, price, selectedCurrency } = props;
//   const value = (amount * selectedCurrency.rate * price).toFixed(2);
//   return <div className="counter">{value > 0 ? value : 0}</div>;
// };
// export default Counter;

import "./counter.css";
import Selection from "../selection/Selection";
import Amount from "../amount/Amount";

const Counter = (props) => {
  const {
    amount,
    price,
    selectedCurrency,
    handleCurrencySelect,
    currencies,
    handleAmountChange,
    selectedProduct,
    labelName,
    handleAmountChangeClick,
  } = props;
  const { id, rate } = selectedCurrency;
  const value = (amount * rate * price).toFixed(2);

  return (
    <div id="counter">
      <span>{labelName}</span>
      {selectedProduct && (
        <span className="price">
          {value > 0 ? value : (rate * price).toFixed(2)}
        </span>
      )}
      {handleCurrencySelect && (
        <Selection
          value={id}
          handleOnChange={handleCurrencySelect}
          items={currencies}
        />
      )}

      {selectedProduct && (
        <Amount
          amount={amount}
          selectedProduct={selectedProduct}
          handleAmountChange={handleAmountChange}
          handleAmountChangeClick={handleAmountChangeClick}
          handleAddToBasketButton={props.handleAddToBasketButton}
        />
      )}
    </div>
  );
};

export default Counter;
