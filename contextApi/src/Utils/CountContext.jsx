import { createContext, useContext, useState } from "react";


export  const CountContext = createContext();

export  function CountContextProvider({children}){

    const [count, setCount] = useState(0)

return <CountContext.Provider value={{count, setCount}} >

    {children}


</CountContext.Provider>

}


// contom hook
 
 export function useCountContext(){

    return useContext(CountContext)
}