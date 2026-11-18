import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const Todo2 = () => {



    function taskReducer(state, action){

        if(action.type=="ADD_TASK"){
            return [
                ...state, action.payload
            ]
        }
        else{
            return state;
        }

    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: "ADD_TASK", payload: userInp})
        setUserInp("")
    }


    const [userInp, setUserInp] = useState("");

    const [task, dispatch] = useReducer(taskReducer, [])


  return (
    <div>

        <form onSubmit={handleSubmit} >

            <input 
            type="text"
             placeholder='Add Task'
             onChange={(e)=>{
                setUserInp(e.target.value)
             }}
             />


             <button>Add Task</button>

        </form>


        <h1>My All the Task2</h1>
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

export default Todo2