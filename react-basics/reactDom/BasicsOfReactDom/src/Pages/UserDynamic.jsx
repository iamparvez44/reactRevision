import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const users = [
  { id: 1, name: "Rahul", role: "Frontend Developer" },
  { id: 2, name: "Priya", role: "Backend Developer" },
  { id: 3, name: "Aman", role: "Full Stack Developer" }
];

const UserDynamic = () => {

    const [currentUser, setCurrentUser] = useState(null)

    const {id} = useParams()
   

    useEffect(()=>{

         const foundUser = users.find((user)=>{
            return user.id==id
         })

         if(foundUser){
            setCurrentUser(foundUser)
         }

         console.log(foundUser);

    }, [id])


  return (
    <div>
        {
            currentUser && <div>

                    <h1>{currentUser.name}</h1>
                    <h1>{currentUser.role}</h1>
                
                 </div>
        }
    </div>
  )
}

export default UserDynamic