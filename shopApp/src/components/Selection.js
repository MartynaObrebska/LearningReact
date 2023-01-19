const Selection = (props) => (
  <div id="selection">
    <label>
      Choose product:
      <select
        value={props.chooseProductValue}
        onChange={props.chooseProductHandleSelect}
      >
        {props.chooseProductOptions}
      </select>
    </label>
    <label>
      <input
        placeholder="Type amount..."
        type="number"
        value={props.inputValue}
        onChange={props.inputHandleAmountChange}
      />
    </label>
  </div>
);

export default Selection;
