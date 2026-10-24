
import React from 'react'
import { useState } from 'react';
import ChildQ7 from './ChildQ7';

const Q7 = () => {

const [user, setUser] = useState({
  name: "",
  age: ""
});

console.log(user)


  return (
    <div>

            <input type="text"
            placeholder='enter name'
            onChange={(e)=>{
                setUser({...user, name: e.target.value})
            }}
            />

            <input type="number"
            placeholder='enter age'
            onChange={(e)=>{
                setUser({
                    ...user,
                    age: e.target.value
                })
            }}
            
            />

           <ChildQ7 user = {user} /> 

    </div>
  )
}

export default Q7