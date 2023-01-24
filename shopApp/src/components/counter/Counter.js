import "./counter.css";
import Selection from "../selection/Selection";

const Counter = (props) => {
  const { amount, price, selectedCurrency, handleCurrencySelect, currencies } =
    props;

  const { id, rate } = selectedCurrency;
  const value = (amount * rate * price).toFixed(2);
  return (
    <div id="counter">
      <div id="price">
        <span className="label">Total price:</span>
        <span className="price">{value > 0 ? value : 0}</span>
        <Selection
          value={id}
          handleOnChange={handleCurrencySelect}
          items={currencies}
        ></Selection>
      </div>
    </div>
  );
};
export default Counter;
