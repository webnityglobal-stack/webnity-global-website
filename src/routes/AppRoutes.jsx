
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"

import Home from "@/pages/Home"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Amazon from "@/pages/ecommerce/Amazon/Amazon"
import Flipcart from "@/pages/ecommerce/Flipkart/Flipcart"
import Clients from "@/pages/Clients"

const AppRoutes = () => {
  return (
    <Routes>

      {/* Parent Layout */}
      <Route path="/" element={<MainLayout />}>

        {/* Child Routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ecommerce/amazon" element={<Amazon />} />
        <Route path="ecommerce/flipkart" element={<Flipcart/>} />
        <Route path= "/clients" element={<Clients/>} />
      </Route>

    </Routes>
  )
}

export default AppRoutes