import Item from "./item/Item";

const ListItems = (props) => {
  const items = props.shoppingBasketProducts.map((product) => {
    return (
      <Item
        key={product.id}
        amount={product.amount}
        selectedCurrency={props.selectedCurrency}
        selectedProduct={product}
        handleCurrencySelect={props.handleCurrencySelect}
        currencies={props.currencies}
        handleAmountChange={props.handleAmountChange}
        handleMinusClick={props.handleMinusClick}
        handlePlusClick={props.handlePlusClick}
      />
    );
  });
  if (props.shoppingBasketProducts) {
    return <ul>{items}</ul>;
  } else {
    return (
      <div className="items">
        <p>Your shopping basket is empty.</p>
      </div>
    );
  }
};

export default ListItems;
