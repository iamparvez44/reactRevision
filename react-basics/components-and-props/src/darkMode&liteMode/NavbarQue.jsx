import { useState } from "react";



const NavbarQue = ({mode, setMode})=>{
    

    return(
        <div style={{display:"flex", justifyContent: "space-between" ,backgroundColor: "orange"}} >
            <h1>Logo</h1>

            <ul style={{display:"flex", gap: "10px", listStyle: "none", }} >
                <button onClick={()=>{
                    setMode(!mode)
                    
                }} >Mode</button>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

        </div>
    )
}

export default NavbarQue;