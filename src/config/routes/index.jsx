import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppsIndex, Register } from '../../pages'; 

const MyRoutes = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppsIndex />}></Route>
            <Route path='register' element={<Register />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes