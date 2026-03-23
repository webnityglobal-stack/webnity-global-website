
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"

import Home from "@/pages/Home"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Amazon from "@/pages/ecommerce/Amazon/Amazon"
import Flipcart from "@/pages/ecommerce/Flipkart/Flipcart"
import Clients from "@/pages/Clients"
import Meesho from "@/pages/ecommerce/Meesho"
import Myntra from "@/pages/ecommerce/Myntra"
import Nykaa from "@/pages/ecommerce/Nykaa"
import QuickMarket from "@/pages/ecommerce/QuickMarket"
import GoogleAds from "@/pages/digitalmarketing/GoogleAds"
import Seo from "@/pages/digitalmarketing/seo/SEO"

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
        <Route path='/ecommerce/meesho' element={<Meesho/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/ecommerce/myntra' element= {<Myntra/>}/>
        <Route path='/ecommerce/nykaa' element={<Nykaa/>}/>
        <Route path='/quick-market'  element={<QuickMarket/>}/>
        <Route path='/digital-marketing/google-ads' element ={<GoogleAds/>}/>
        <Route path= '//digital-marketing/seo' element = {<Seo/>}/>
      </Route>

    </Routes>
  )
}

export default AppRoutes