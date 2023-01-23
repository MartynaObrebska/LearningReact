import "./amount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Amount = (props) => {
  return (
    <label id="amount">
      <button
        id="minus"
        onClick={props.handleMinusClick}
        disabled={props.amount ? false : true}
        className={props.amount ? "" : "disabled"}
      >
        <FontAwesomeIcon icon="minus" />
      </button>
      <input
        type="number"
        value={props.amount}
        onChange={props.handleAmountChange}
      />
      <button
        id="plus"
        onClick={props.handlePlusClick}
        disabled={props.selectedProductAmount === props.amount ? true : false}
        className={
          props.selectedProductAmount === props.amount ? "disabled" : ""
        }
      >
        <FontAwesomeIcon icon="plus" />
      </button>
    </label>
  );
};
export default Amount;
