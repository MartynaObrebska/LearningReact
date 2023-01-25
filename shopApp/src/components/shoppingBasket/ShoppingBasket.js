import "./shoppingBasket.css";
import ListItems from "../listItems/ListItems";
import Summary from "./summary/Summary";

const ShoppingBasket = (props) => {
  if (props.shoppingBasketActive) {
    return (
      <div id="shoppingBasket">
        <h2>Your shopping basket:</h2>
        <ListItems
          products={props.products}
          handleAmountChange={props.handleBasketProductAmountChange}
          handleAmountChangeClick={props.handleBasketProductAmountChangeClick}
          selectedCurrency={props.selectedCurrency}
          currencies={props.currencies}
          handleCurrencySelect={props.handleCurrencySelect}
        />
        <Summary
          products={props.products}
          selectedCurrency={props.selectedCurrency}
          handleCurrencySelect={props.handleCurrencySelect}
          currencies={props.currencies}
          handleAmountChange={props.handleAmountChange}
          handleAmountChangeClick={props.handleAmountChangeClick}
          handleAddToBasketButton={props.handleAddToBasketButton}
        />
      </div>
    );
  }
};

export default ShoppingBasket;
