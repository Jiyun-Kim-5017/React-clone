import React, { useState } from "react";
import OddEven from "./OddEven";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <OddEven count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 4,
};

export default Counter;
