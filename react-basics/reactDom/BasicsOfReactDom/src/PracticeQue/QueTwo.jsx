import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import UserDynamic from '../Pages/UserDynamic'

const QueTwo = () => {





  return (
    <Routes>

        <Route path='/user/:id' element={<UserDynamic/>} ></Route>

    </Routes>
  )
}

export default QueTwo