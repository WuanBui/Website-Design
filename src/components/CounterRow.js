import React from "react";
const CounterRow = (props) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      console.log('Counter ${props.id} mounted');
    },[])

    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <div className="row">
      <button onClick={handleClick} className="green-button"> Button 1 </button>
      <div className="counter"> {count} </div>
    </div>
  );
}
export default CounterRow;