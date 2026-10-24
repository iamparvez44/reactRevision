
import React, { useEffect, useState } from 'react'

const Timer2 = () => {

   const [timer, setTimer] = useState(0);
   const [isRunning, setIsRunning] = useState(false);


   useEffect(()=>{

    if(!isRunning){
        return;
    }

    const intervalId =  setInterval(()=>{
        setTimer(prev => prev+1)
    },1000)

    return ()=>{
    clearInterval(intervalId)
}
   

   },[isRunning])

 

  return (
    <div>
        <h1>STOP WATCH</h1>

        <h1>{timer}</h1>
        <button onClick={()=>{
            setIsRunning(true)
        }} >Start</button>
        <button onClick={()=>{
            setIsRunning(false)
        }} >Stop</button>
        <button onClick={()=>{
            setIsRunning(false)
            setTimer(0)
        }} >Reset</button>
    </div>
  )
}

export default Timer2
