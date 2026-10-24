
import React, { useEffect } from 'react'

const ChildQ5 = ({data}) => {


    useEffect(()=>{
        console.log("Name Changed: ", data)
    }, [data])

  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default ChildQ5