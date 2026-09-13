import React, { useState, useEffect } from "react";

const LifeCycleLogger = () => {
  const [count, setCount] = useState(0);
  // componentDidupdate
  useEffect(() => {
    console.log("Component Mounted ...");

    // componentWillUnmount
    return () => {
      console.log("Component Unmount...");
    };
  }, []);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  // ComponentDidUpdate
  useEffect(() => {
    if (count > 0) {
      console.log("Component Updated...", count);
    }
  }, [count]);

  return (
    <>
      <div className="logger-container">
        <h2>LifeCycle (Function Component)</h2>
        <p> Count: {count}</p>
        <button onClick={incrementCount} className="secondary-btn">
          Update
        </button>
      </div>
    </>
  );
};

export default LifeCycleLogger;
