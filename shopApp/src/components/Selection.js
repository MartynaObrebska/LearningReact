const Selection = (props) => (
  <div id="selection">
    <label>
      Choose category:
      <select value={props.categoryValue} onChange={props.handleCategorySelect}>
        {props.optionalCategories}
      </select>
    </label>
    <label>
      Choose product:
      <select value={props.productValue} onChange={props.handleProductSelect}>
        {props.productOptions}
      </select>
    </label>
    <label>
      <input
        placeholder="Type amount..."
        type="number"
        value={props.amountValue}
        onChange={props.handleAmountChange}
      />
    </label>
  </div>
);

export default Selection;
