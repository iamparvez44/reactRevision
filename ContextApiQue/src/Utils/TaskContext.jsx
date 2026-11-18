import { createContext, useState } from "react";

export  const UserInpContext = createContext();

export function UserInpContextProvider({children}){

const [userInp, setUserInp] = useState("");
const [task, setTask] = useState([])

return <UserInpContext.Provider value={{userInp, setUserInp, task, setTask}}>

    {children}

</UserInpContext.Provider>


}



