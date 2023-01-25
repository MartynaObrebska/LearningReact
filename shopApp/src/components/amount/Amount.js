import "./amount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Amount = (props) => {
  const minusValue = (Number(props.amount) - 1).toString();
  const plusValue = (Number(props.amount) + 1).toString();

  const handleDisabled = () => {
    return props.selectedProduct.stored <= Number(props.amount);
  };

  return (
    <label id="amount">
      <button
        id="minus"
        value={minusValue}
        onClick={props.handleAmountChangeClick}
        disabled={!Number(props.amount)}
        className={!Number(props.amount) ? "disabled" : ""}
        data-selectedid={props.selectedProduct.id}
      >
        <FontAwesomeIcon icon="minus" value={minusValue} />
      </button>
      <input
        type="number"
        value={props.amount}
        onChange={props.handleAmountChange}
        data-productid={props.selectedProduct.id}
      />
      <button
        id="plus"
        value={plusValue}
        onClick={props.handleAmountChangeClick}
        disabled={handleDisabled()}
        className={handleDisabled() ? "disabled" : ""}
        data-selectedid={props.selectedProduct.id}
      >
        <FontAwesomeIcon icon="plus" value={plusValue} />
      </button>
    </label>
  );
};
export default Amount;
