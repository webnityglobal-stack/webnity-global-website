// import { Routes, Route } from "react-router-dom"
// import MainLayout from "@/layouts/MainLayout"

// import Home from "@/pages/Home"
// import About from "@/pages/About"
// import Contact from "@/pages/Contact"
// import Amazon from "@/pages/ecommerce/Amazon"
// import Seo from "@/pages/digitalmarketing/Seo"

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <MainLayout>
//             <Home/>
//           </MainLayout>
//         }
//       />

//       <Route
//         path="/about"
//         element={
//           <MainLayout>
//             <About />
//           </MainLayout>
//         }
//       />

//       <Route
//         path="/contact"
//         element={
//           <MainLayout>
//             <Contact />
//           </MainLayout>
//         }
//       />
//       <Route path="/ecommerce/amazon" element={<Amazon/>} />
//       <Route path="/ecommerce/flipkart" element={<Flipkart/>} />

//       <Route path="/marketing/seo" element={<Seo/>} />

//     </Routes>
//   )
// }

// export default AppRoutes
import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"

import Home from "@/pages/Home"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Amazon from "@/pages/ecommerce/Amazon"
import Flipkart from "@/pages/ecommerce/Flipkart"
import Seo from "@/pages/digitalmarketing/Seo"

const AppRoutes = () => {
  return (
    <Routes>

      {/* Layout Wrapper */}
      <Route path="/" element={<MainLayout />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Ecommerce */}
        <Route path="ecommerce/amazon" element={<Amazon />} />
        <Route path="ecommerce/flipkart" element={<Flipkart />} />

        {/* Marketing */}
        <Route path="marketing/seo" element={<Seo />} />

      </Route>

    </Routes>
  )
}

export default AppRoutes