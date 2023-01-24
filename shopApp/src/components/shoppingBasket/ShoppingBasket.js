import "./shoppingBasket.css";
import ListItems from "../listItems/ListItems";
import Summary from "./summary/Summary";

const ShoppingBasket = (props) => {
  if (props.shoppingBasketActive) {
    return (
      <div id="shoppingBasket">
        <h2>Your shopping basket:</h2>
        <ListItems
          shoppingBasketProducts={props.shoppingBasketProducts}
          handleAmountChange={props.handleAmountChange}
          handleMinusClick={props.handleMinusClick}
          handlePlusClick={props.handlePlusClick}
        />
        <Summary
          shoppingBasketProducts={props.shoppingBasketProducts}
          selectedCurrency={props.selectedCurrency}
          handleCurrencySelect={props.handleCurrencySelect}
          currencies={props.currencies}
        />
      </div>
    );
  }
};

export default ShoppingBasket;
