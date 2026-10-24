import { useState } from "react"

const UserInfo = ()=>{


    // let [name, setName] = useState("");
    // let [email, setEmail] = useState("");

   let [data, setData] = useState({
    name: "",
    email: "",
    password: ""
   })

   console.log(data);


    return(
        <div>
        
        <form style={{display: "flex", flexDirection:"column", width: "30vw", gap: "10px", border: "2px solid red", padding: "20px", borderRadius: "20px"}}>
            <label htmlFor="name">Enter Your name: </label>
            <input type="text" name="name" onInput={(e)=>{

                setData({...data, name: e.target.value})

            }}  />

            <label htmlFor="email">Enter Your email: </label>
            <input type="email" name="email" onInput={(e)=>{

                setData({...data, email: e.target.value})

            }} />

            <label htmlFor="password">Enter Your password: </label>
            <input type="password" name="password" onInput={(e)=>{

                setData({...data, password: e.target.value})

            }} />

        <button style={{width:"100px"}}>Submit</button>

        </form>


        </div>
    )
}

export default UserInfo