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
    selectedProductAmount,
  } = props;

  const { id, rate } = selectedCurrency;
  const value = (amount * rate * price).toFixed(2);
  return (
    <div id="counter">
      <div id="price">
        <span>Price:</span>
        <span className="price">{value > 0 ? value : 0}</span>
        <Selection
          value={id}
          handleOnChange={handleCurrencySelect}
          items={currencies}
        ></Selection>
      </div>
      <Amount
        amount={amount}
        selectedProductAmount={selectedProductAmount}
        handleAmountChange={handleAmountChange}
        handleMinusClick={props.handleMinusClick}
        handlePlusClick={props.handlePlusClick}
        handleAddToBasketButton={props.handleAddToBasketButton}
      />
    </div>
  );
};
export default Counter;
