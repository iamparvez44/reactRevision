import { useState } from "react"
import HeroQue from "./HeroQue"
import NavbarQue from "./NavbarQue"


const Practice2 = ()=>{

    const [mode, setMode] = useState(false);


    return(
        <div style={{width: "80vw"}} >
            <NavbarQue mode= {mode} setMode= {setMode} />
            <HeroQue mode={mode} />
            

        </div>
    )
}

export default Practice2