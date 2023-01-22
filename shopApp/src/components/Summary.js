const Summary = (props) => {
  if (props.shoppingBasketProducts[0]) {
    return (
      <div id="summary">
        <h3 id="total">
          Items total: <span>{}</span>
        </h3>
      </div>
    );
  }
};

export default Summary;
