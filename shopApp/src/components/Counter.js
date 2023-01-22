import Selection from "./Selection";
import Amount from "./Amount";

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
        <span>{value > 0 ? value : 0}</span>
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
      />
    </div>
  );
};
export default Counter;
