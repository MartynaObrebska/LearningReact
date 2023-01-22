import ListItems from "./ListItems";
import Summary from "./Summary";

const ShoppingBasket = (props) => {
  if (props.shoppingBasketActive) {
    return (
      <div id="shoppingBasket">
        <h2>Your shopping basket:</h2>
        <ListItems shoppingBasketProducts={props.shoppingBasketProducts} />
        <Summary shoppingBasketProducts={props.shoppingBasketProducts} />
      </div>
    );
  }
};

export default ShoppingBasket;
