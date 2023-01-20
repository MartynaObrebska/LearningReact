import Options from "./Options";

const Selection = (props) => (
  <div className="selection">
    <label>
      {props.labelTitle}
      <select value={props.value} onChange={props.handleOnChange}>
        {props.items.length > 1 && <Options items={props.items} />}
      </select>
    </label>
  </div>
);

export default Selection;
