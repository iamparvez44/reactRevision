import { useState } from "react"

const Counter = ()=>{

    let [val, setVal] = useState(0);

    return(
        <>

        <h1>{val}</h1>

            <button onClick={()=>{setVal(val = val+1)}} >Inc</button>
            <button onClick={()=>{setVal(val = val-1)}} >Dec</button>
            <button onClick={()=>{setVal(0)}}>reset</button>

        </>
    )
}

export default Counter