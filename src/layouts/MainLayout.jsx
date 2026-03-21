import WhatsAppButton from "@/components/common/WhatsAppButton"

import Footer from "../pages/Footer"
import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar"



const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />  
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}

export default MainLayout