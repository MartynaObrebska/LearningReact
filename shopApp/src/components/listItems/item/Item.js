import "./item.css";
import Counter from "../../counter/Counter";
import Amount from "../../amount/Amount";

const Item = (props) => {
  const {
    amount,
    selectedCurrency,
    selectedProduct,
    handleCurrencySelect,
    currencies,
    handleAmountChange,
    handleMinusClick,
    handlePlusClick,
    handleAddToBasketButton,
  } = props;
  const { title, image, price } = selectedProduct;
  return (
    <div id="item">
      <img alt={title} src={image}></img>
      <h3>{title}</h3>

      <div className="amount">
        <Amount
          amount={amount}
          selectedProductAmount={selectedProduct.amount}
          handleAmountChange={handleAmountChange}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
          handleAddToBasketButton={handleAddToBasketButton}
        />
      </div>
    </div>
  );
};
export default Item;
