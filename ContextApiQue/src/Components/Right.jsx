import React from 'react'

const Right = ({userInp, setUserInp, task, setTask}) => {


  return (
    <div>

        <h1>RIGHT</h1>

        <h1>{userInp}</h1>
        <h1>Here Are All the Task</h1>

    {task.length !==0 && (
        <div>

            {task.map((val, index) => {
                return(
                    <ul key={index} >
                        <li>{val}</li>
                    </ul>
                )
            })}
        
        </div>
    )}

    </div>
  )
}

export default Right