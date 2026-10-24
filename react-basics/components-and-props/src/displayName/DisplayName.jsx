import { useState } from "react"

const DisplayName = ()=>{

    let [inputVal, setInputVal] = useState("");

    function handleInp(e){

        setInputVal(e.target.value)

    }

    return(
        <>

                <span>Enter Your name: </span>
                <input type="text" value={inputVal} onChange={handleInp} />


                <h1> Hello {inputVal}</h1>

        </>
    )
}

export default DisplayName