import React from 'react'
import { Routes,Route } from 'react-router-dom'
import BecomeInstructor from '../components/BecomeInstructor'
import InstrucNavbar from '../components/InstrucNavbar'

import { Outlet } from "react-router-dom";

const Instructor = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Instructor
