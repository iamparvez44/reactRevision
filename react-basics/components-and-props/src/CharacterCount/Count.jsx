import { useState } from "react"

const Count = ()=>{

    let char = 0;


const [val, setVal] = useState("");


function handleInp(e){

    setVal(e.target.value)
}


    return(

        <>

            <input type="text" value={val} onChange={handleInp} />
            <h1>{val}</h1>
            <h1>Characters: {
                val.replaceAll(" ", "").length
                }
            
            
            </h1>

        </>
    )
}

export default Count