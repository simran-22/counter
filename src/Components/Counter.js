import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const refresh = () => {
    setCount(0);
  };
  const decrease = () => {
    if (count === 0) return;

    setCount(count - 1);
  };

  return (
    <div className="counter-fluid">
      <div className="row">
        <div className="col-sm-12 bg-info p-4">
          <div className="counter-heading">
            <h4>Counter App</h4>
          </div>
        </div>
        <div className="col-sm-4 offset-md-4 ">
          <div className="counter-section">
            <div className="output-div">
              <h5>{count}</h5>
            </div>
            <div className="btns">
              <button onClick={increase} class="btn btn-primary btn-lg">
                Increase
              </button>
              <button onClick={refresh} class="btn btn-success btn-lg">
                Refresh
              </button>
              <button onClick={decrease} class="btn btn-secondary btn-lg">
                Decrease
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
