import React, { useContext, useState } from 'react'
import Left from './Components/Left';
import Right from './Components/Right';
import { UserInpContext } from './Utils/TaskContext';

const App = () => {

  const {userInp, setUserInp, task, setTask} = useContext(UserInpContext)
  


  return (
   <div className="flex w-full min-h-screen">
  <div className="w-1/2 bg-blue-100 p-5">
    <Left userInp = {userInp} setUserInp= {setUserInp} task={task} setTask={setTask} />
  </div>

  <div className="w-1/2 bg-green-100 p-5">
    <Right userInp = {userInp} setUserInp= {setUserInp} task={task} setTask={setTask} />
  </div>
</div>
  )
}

export default App