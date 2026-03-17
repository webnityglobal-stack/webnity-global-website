import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../pages/Footer'

const MainLayout = ({ children }) => {
  return (
    <div>
       <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default MainLayout
