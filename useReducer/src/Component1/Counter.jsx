import React from 'react'
import { useReducer } from 'react'

const Counter = () => {

    function countReducer(state, action){

        if(action.type=="Increase"){
            return action.payload;
        }
        else if(action.type=="decrese"){
            return action.payload
        }
        else if(action.type=="reset"){
            return 0
        }
        else{
            return state
        }

    }


    const [count, dispatch] = useReducer(countReducer, 0)


  return (

    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>{dispatch({type:"Increase", payload: count+1})}} >Increase</button>
        <button onClick={()=>{dispatch({type:"Increase", payload: count-1})}} >Decrese</button>
         <button onClick={()=>{dispatch({type:"reset", payload: 0})}} >Reset</button>

    </div>
  )
}

export default Counter