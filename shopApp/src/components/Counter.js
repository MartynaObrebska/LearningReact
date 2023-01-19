const Counter = (props) => {
  const value = (props.count * props.rate * props.price).toFixed(2);
  return (
    <div className="counter">
      {value > 0 ? value : 0} {props.code}
    </div>
  );
};
export default Counter;
