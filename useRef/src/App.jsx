// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0)
//   const inpRef = useRef();

//   console.log(inpRef);

//   useEffect(()=>{
//     inpRef.current.focus()
//   }, [])

//   return (
//     <div>

//        <div className='counter' >

//         <h1 className='text-5xl ' >{count}</h1>

//       <button className='text-3xl bg-blue-500 text-black rounded-2xl p-2.5' onClick={()=>{setCount(count=>count+1)}} >+</button>
//       <button className='text-3xl bg-blue-500 text-black rounded-2xl p-2.5' onClick={()=>{setCount(count=>count-1)}} >-</button>

//       </div>

//       <form>
//         <input type="text" placeholder='type name' className=' border-2' ref={inpRef}/>
//         <input type="email" placeholder='Enter Email' className='border-2'  />

//         <button className='border-2 bg-amber-500' >Submit</button>
//       </form>

//       <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut excepturi fuga doloribus sapiente, atque laboriosam.</h1>

//     </div>
//   )
// }

// export default App

// import React, { useEffect, useRef, useState } from "react";

// const App = () => {
//   const inpRef = useRef();
//   const [name, setName] = useState('');

//   function handleSubmit(e){

//     e.preventDefault();
//     setName(inpRef.current.value)


//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit} >
//         <input type="text" placeholder="Enter Name" ref={inpRef} />
//         <button>Submit</button>
//         <h1 className="text-6xl" >{name}</h1>
//       </form>
//     </div>
//   );
// };

// export default App;


// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {

//   const inputRef = useRef()
//   const [name, setName] = useState("");
  

//   function handleSubmit(e){
//     e.preventDefault()
    
//    setName(inputRef.current.value);
//     inputRef.current.style.backgroundColor = "red";
//     inputRef.current.value = "";


//   }

//   useEffect(()=>{
//     inputRef.current.focus()
//   },[])

//   return (
//     <div>

//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='Enter Name' ref={inputRef}/>
//         <button>Submit</button>
//         <h1 className='text-4xl'>{name}</h1>
//       </form>

//     </div>
//   )
// }

// export default App


// Render Count Track Karo
// Ek component banao jisme counter ho. Har baar counter update hone par useRef se track karo ki component kitni baar render hua.
// Condition: useRef update hone par extra re-render nahi hona chahiye.

// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {

//   const renderRef = useRef(0)
//   const [count, setCount] = useState(0);


//   useEffect(()=>{
//     renderRef.current = renderRef.current+1
//   }, [count])

//   return (
//     <div>

//     <h1>{count}</h1>
//     <button onClick={()=>{setCount(prev=> prev+1)}} >INC</button>
//     <button onClick={()=>{setCount(prev=> prev-1)}} >DEC</button>

//     <button onClick={()=>{console.log(renderRef)}} >showAns</button>


//     </div>
//   )
// }

// export default App

// Previous State Value
// Ek counter banao jo 0 se start ho. Screen par current value aur previous value dono show karo.
// Example:
// - Current: 5
// - Previous: 4
// Hint: useRef + useEffect

// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {

//   const prevRef = useRef(null);

//   const [count, setCount] = useState(0);

//   const previous = prevRef.current

//   useEffect(()=>{
//     prevRef.current = count
//   }, [count])


//   return (
//     <div>

//       <h1 className='text-6xl' >Current  {count}</h1>
//       <h1 className='text-6xl' >Previous {previous ?? "_"}</h1>
      
//       <button
//        className='border-2 bg-green-500 p-2 m-2' 
//        onClick={()=>{setCount(prev=>prev+1)}}
//         >Inc</button>

//         <button
//        className='border-2 bg-red-500 p-2 m-2' 
//        onClick={()=>{setCount(prev=>prev-1)}}
//         >Inc</button>

//     </div>
//   )
// }

// export default App

// Start / Stop Timer
// Ek timer banao jo har second count increase kare. Do buttons hone chahiye: Start aur Stop.
// Condition: useRef mein interval ID store karo aur duplicate intervals ko prevent karo.

// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {

//   const [time, setTime] = useState(0);
//   const idRef = useRef(null)


//   function handleStart(){

//     if (idRef.current !==null) return

//     idRef.current  = setInterval(()=>{

//       setTime(prev=> prev+1)
//     }, 1000)


//   }


//   function handleStop(){

//     clearInterval(idRef.current)
//     idRef.current = null

//   }

//   function handleReset(){
//     clearInterval(idRef.current)
//     idRef.current = null
//     setTime(0)
//   }


// useEffect(()=>{

//   console.log("Effect Running");

//        return ()=>{
//         console.log("CleanUp Running")
//       clearInterval(idRef.current)
//     }

// }, [])
  


//   return (
//     <div>

//       <h1 className='text-7xl'  >{time}</h1>
//       <button className='border-black-500 p-2 m-2 rounded-2xl bg-blue-500 text-2xl' onClick={handleStart} >Start</button>
//       <button className='border-black-500 p-2 m-2 rounded-2xl bg-blue-500 text-2xl' onClick={handleStop} >Stop</button>
//       <button className='border-black-500 p-2 m-2 rounded-2xl bg-blue-500 text-2xl' onClick={handleReset} >Reset</button>


//     </div>
//   )
// }

// export default App





// YAHA SE USE MEMO AND MEMO K QUE KARENGE





// import React from 'react'
// import Parant from './Parant'



// const App = () => {
//   return (
//     <div>

//         <Parant/>

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import { useMemo, memo } from 'react';

// const App = () => {


//   return (
//     <div>

//      this is working


//     </div>
//   )
// }

// export default App


