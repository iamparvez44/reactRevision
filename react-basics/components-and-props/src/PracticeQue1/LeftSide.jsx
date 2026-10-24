import { useState } from "react"

const LeftSide=({data, setVal})=>{

    

    function handleInp(e){
        setVal(e.target.value)
    }

    return(
        <div>

            <label htmlFor="display">Write Here</label>
            <input type="text" name="display" id="display" placeholder="write something" value={data} onChange={handleInp} />

        </div>
    )
}

export default LeftSide