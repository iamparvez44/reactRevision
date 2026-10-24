import React, { useEffect, useState } from "react";

const Timer = () => {
  const [sec, setSec] = useState(0);


  useEffect(()=>{

    let ID = setInterval(()=>{
        setSec(prev => prev+1)
    },1000)

    return ()=>{
        clearInterval(ID);
    }

  }, [])

  

  return (
    <div>
      <h1>Seconds {sec}</h1>
    </div>
  );
};

export default Timer;
