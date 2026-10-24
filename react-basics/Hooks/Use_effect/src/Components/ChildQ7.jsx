
import React, { useEffect } from 'react'

const ChildQ7 = ({user}) => {


    useEffect(()=>{
        console.log("user data updated",user)
    }, [user])


  return (
    <div>

        {user && <h1> {user.name} </h1>
        }

         {user && <h1> {user.age} </h1>
        }



    </div>
  )
}

export default ChildQ7