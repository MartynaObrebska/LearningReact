import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Amount = (props) => {
  return (
    <label id="amount">
      <button id="addToCart">
        <FontAwesomeIcon icon="minus" />
      </button>
      <input
        placeholder="Type amount..."
        type="number"
        value={props.amountValue}
        onChange={props.handleAmountChange}
      />
      <button id="addToCart">
        <FontAwesomeIcon icon="plus" />
      </button>
    </label>
  );
};
export default Amount;
