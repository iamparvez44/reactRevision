import { useState } from "react"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

const PracticeQue1 = ()=>{

    const [val, setVal] = useState("")

    return(
        <div style={{display: "flex"}} >

        <LeftSide data = {val} setVal = {setVal} />
        <RightSide mydata={val} />
        
        </div>
    )
}

export default PracticeQue1