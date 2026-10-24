import { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("0");
  let operators = ["+", "-", "*", "/", "="];

  function handleClick(e) {
    let userVal = e.target.innerText;

    if (
      operators.includes(val[val.length - 1]) &&
      operators.includes(userVal)
    ) {
      return;
    }

    if (val == 0) {
      setVal(userVal);
    } else {
      setVal((prev) => prev + userVal);
    }
  }

  return (
    <>
      <div className="calculator">
        {/* Display */}
        <div className="inp">{val}</div>

        {/* Buttons */}
        <div className="main-box">
          <button className="btns" onClick={() => setVal("0")}>
            C
          </button>
          <button className="btns" onClick={handleClick}>
            /
          </button>
          <button className="btns" onClick={handleClick}>
            *
          </button>
          <button className="btns" onClick={handleClick}>
            -
          </button>

          <button className="btns" onClick={handleClick}>
            7
          </button>
          <button className="btns" onClick={handleClick}>
            8
          </button>
          <button className="btns" onClick={handleClick}>
            9
          </button>
          <button className="btns" onClick={handleClick}>
            +
          </button>

          <button className="btns" onClick={handleClick}>
            4
          </button>
          <button className="btns" onClick={handleClick}>
            5
          </button>
          <button className="btns" onClick={handleClick}>
            6
          </button>
          <button className="btns" onClick={handleClick}>
            =
          </button>

          <button className="btns" onClick={handleClick}>
            1
          </button>
          <button className="btns" onClick={handleClick}>
            2
          </button>
          <button className="btns" onClick={handleClick}>
            3
          </button>
          <button className="btns" onClick={handleClick}>
            0
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
