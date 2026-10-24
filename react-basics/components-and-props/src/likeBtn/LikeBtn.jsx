import { useState } from "react"


const LikeBtn = ()=>{

    let [count, setCount] = useState(0);

    function handleClick(){
        setCount(prevVal => prevVal+1);
    }

    return(
        <>

        <h1> ❤️ {count} </h1>
        <button onClick={handleClick} >LIKE</button>

        </>
    )
}

export default LikeBtn