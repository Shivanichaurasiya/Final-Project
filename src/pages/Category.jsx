import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Courses from '../components/Courses'
import { Outlet } from "react-router-dom";


const Category = () => {
  return (
    <div>
        {/* <Courses/> */}
        <Outlet/>
        
      
    </div>
  )
}

export default Category
