import Counter from "./Counter";
const Product = (props) => {
  const counters = props.currencies.map((currency) => (
    <Counter
      key={currency.id}
      name={currency.name}
      rate={currency.rate}
      code={currency.code}
      count={props.count}
      price={props.price}
    />
  ));
  if (props.selectedProduct) {
    return (
      <div id="product">
        <h2>{props.title}</h2>
        <img alt={props.title} src={props.img}></img>
        <p>{props.description}</p>
        <h3>Price:</h3>
        <div id="counters">{counters}</div>
      </div>
    );
  }
};

export default Product;
