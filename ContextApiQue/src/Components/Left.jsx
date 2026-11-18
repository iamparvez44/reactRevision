import React, { useState } from 'react'

const Left = ({userInp, setUserInp, task, setTask}) => {

    console.log(task, "from left")


    function handleSubmit(e){
        e.preventDefault()

        setTask([...task,userInp]);
        setUserInp("");
        

    }
    

  return (
    <div>

        <h1>LEFT</h1>

        <form onSubmit={handleSubmit} >
            <input className='border' type="text"   value={userInp} onChange={(e)=>{setUserInp(e.target.value)}} />
            <button >Add Task</button>
        </form>

    </div>
  )
}

export default Left