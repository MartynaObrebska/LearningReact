import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Amount = (props) => {
  return (
    <label id="amount">
      <button id="minus">
        <FontAwesomeIcon icon="minus" />
      </button>
      <input
        type="number"
        value={props.amount}
        onChange={props.handleAmountChange}
      />
      <button id="plus">
        <FontAwesomeIcon icon="plus" />
      </button>
    </label>
  );
};
export default Amount;
