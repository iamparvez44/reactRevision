import { useState } from "react";

const Toggle = () => {
  let [status, setStatus] = useState(false);

  let displayValue = "";
  let buttonValue = "";

  if (status === true) {
    displayValue = "ON";
  } else {
    displayValue = "OFF";
  }

  if(status==true){
    buttonValue = "OFF"
  }
  else{
    buttonValue = "ON"
  }

  function handleClick() {
    if (status === true) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }

  return (
    <>
      <h1>Status: {displayValue}</h1>
      <button onClick={handleClick}>{buttonValue}</button>

      {console.log(status)}
    </>
  );
};

export default Toggle;
