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
  } = props;

  const { id, rate } = selectedCurrency;
  const value = (amount * rate * price).toFixed(2);
  return (
    <div id="counter">
      <div id="price">
        <span>Price:</span>
        <span>{value > 0 ? value : 0}</span>
      </div>
      <Selection
        value={id}
        handleOnChange={handleCurrencySelect}
        items={currencies}
      ></Selection>
      <Amount amount={amount} handleAmountChange={handleAmountChange} />
    </div>
  );
};
export default Counter;
