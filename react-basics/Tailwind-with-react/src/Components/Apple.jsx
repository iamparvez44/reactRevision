import React, { useEffect, useState } from "react";

const Apple = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return (
    <>
      <div>Apple</div>

      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inc
      </button>
    </>
  );
};

export default Apple;
