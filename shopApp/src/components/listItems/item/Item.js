import "./item.css";
import Counter from "../../counter/Counter";

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
  } = props;
  const { title, image, price } = selectedProduct;
  return (
    <div id="item">
      <img alt={title} src={image}></img>
      <h2>{title}</h2>
      <Counter
        amount={amount}
        price={price}
        selectedCurrency={selectedCurrency}
        selectedProductAmount={selectedProduct.amount}
        handleCurrencySelect={handleCurrencySelect}
        currencies={currencies}
        handleAmountChange={handleAmountChange}
        handleMinusClick={handleMinusClick}
        handlePlusClick={handlePlusClick}
      />
    </div>
  );
};
export default Item;
