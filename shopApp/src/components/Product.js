import Amount from "./Amount";
import Counter from "./Counter";
import Selection from "./Selection";
const Product = (props) => {
  if (props.selectedProduct.image) {
    const {
      selectedCurrency,
      amountValue,
      price,
      handleAmountChange,
      selectedProduct,
    } = props;
    const { id, name, rate, code } = selectedCurrency;
    const { title, category, image, description } = selectedProduct;
    return (
      <div id="product">
        <h2>{props.title}</h2>
        <h3 id="category">{category}</h3>
        <img alt={title} src={image}></img>
        <p>{description}</p>
        <div id="price">
          <h3>Price:</h3>
          <Counter
            key={id}
            name={name}
            rate={rate}
            code={code}
            count={amountValue}
            price={price}
          />
          <Selection
            value={selectedCurrency}
            handleOnChange={props.handleCurrencyChange}
            items={props.currencies}
          ></Selection>
        </div>
        <Amount
          amountValue={amountValue}
          handleAmountChange={handleAmountChange}
        />
      </div>
    );
  }
};

export default Product;
