import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const Todo = () => {

    function taskReducer(state, action){

        if(action.type=="ADD_TASK"){
            return [
                ...state, action.payload
            ]
        }


    }

   


    const [userInp, setUserInp] = useState("")

  const [task, dispatch] = useReducer(taskReducer, []);

    console.log(task)
  return (
    <div>

        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch({type:"ADD_TASK", payload: userInp})
            setUserInp("")
        }} >

            <input
             type="text"
             placeholder='Add Task'
             value={userInp}
             onChange={(e)=>{setUserInp(e.target.value)}} 
              />
            <button>Add Task</button>

        </form>


        <h1>All My Task</h1>

        {
            task.length>0 && (
                <ul>
                    {
                        task.map((item, index)=>{
                            return <li key={index} >{item}</li>
                        })
                    }
                </ul>
            )
        }


    </div>
  )
}

export default Todo