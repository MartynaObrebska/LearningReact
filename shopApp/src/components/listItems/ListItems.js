import Item from "./item/Item";

const ListItems = (props) => {
  const basketProducts = props.products.filter(
    (product) => product.activeBasket
  );
  const items = basketProducts.map((product) => {
    return (
      <Item
        key={product.id}
        amount={product.selected}
        selectedCurrency={props.selectedCurrency}
        selectedProduct={product}
        handleCurrencySelect={props.handleCurrencySelect}
        currencies={props.currencies}
        handleAmountChange={props.handleAmountChange}
        handleAmountChangeClick={props.handleAmountChangeClick}
      />
    );
  });
  if (basketProducts) {
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
