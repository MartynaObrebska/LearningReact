import "./selection.css";
import Options from "./options/Options";

const Selection = (props) => (
  <label className="selection">
    {props.labelTitle}
    <select value={props.value} onChange={props.handleOnChange}>
      {props.items.length > 1 && <Options items={props.items} />}
    </select>
  </label>
);

export default Selection;
