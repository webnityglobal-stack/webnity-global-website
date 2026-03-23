// src/sections/Footer.jsx
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#050B18] border-t border-[#0A66FF]/20 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8  lg:gap-40">

          {/* Company Info - Left Side */}
          <div className="flex gap-4 lg:pl-8 lg:col-span-4">
           <div>
             <h2 className="text-2xl font-bold text-[#438bff] mb-4 md:text-2xl md:font-bold md:text-[#438bff] md:mb-4">
              Webnity Global
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              LG-45, Orbit plaza, 201009<br />
              Lower Ground<br />
              Ghaziabad, Uttar Pradesh <br />
              India
            </p>
           </div>

            <div className="pt-12 md:flex md:flex-col md:space-y-3">
              <div>
                <p className="text-[#0A66FF] text-sm font-semibold mb-1">Phone number</p>
                <a href="tel:1-800-201-1019" className="text-gray-400 hover:text-[#FF7A00] text-sm transition">
                  Phone: +91 7303800109
                </a>
              </div>

              <div>
                <p className="text-[#0A66FF] text-sm font-semibold mb-1">Email</p>
                <a href="mailto:webnityglobal@gmail.com" className="text-gray-400 hover:text-[#FF7A00] text-sm transition">
                  webnityglobal@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* main links coantainer  */}
          <div className="md:flex md:gap-50 md:justify-between flex gap-8 justify-between">
            <div className="flex justify-between  gap-12 md:flex md:gap-50" >

              {/* Quick Links */}
              <div className="lg:col-span-2">
                <h3 className="text-white font-semibold mb-4 text-lg whitespace-nowrap">Quick links</h3>
                <ul className="space-y-3">
                  {[ "About us", "FAQ", "Contact us"].map((item) => (
                    <li key={item}>
                      <Link
                        to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                        className="text-gray-400 hover:text-[#FF7A00] text-sm transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="lg:col-span-3">
                <h3 className="text-white font-semibold mb-4 text-lg">Social</h3>
                <ul className="space-y-3">
                  {[
                    {
                      name: "Facebook",
                      url: "https://www.facebook.com/people/Webnity-Global/61584828463219/"
                    },
                    {
                      name: "Instagram",
                      url: "https://www.instagram.com/webnityglobal/"
                    },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/posts/webnity-global-210929397_makarsankranti-webnityglobal-newbeginnings-activity-7416705917460615168-aaew/"
                    }
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FF7A00] text-sm transition inline-flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#0A66FF] rounded-full"></span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="lg:col-span-3">
  <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
  <ul className="space-y-3">
    {[
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Privacy policy", path: "/privacy" },
      { name: "Cookie policy", path: "/cookies" }
    ].map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className="text-gray-400 hover:text-[#FF7A00] text-sm transition md:whitespace-nowrap"
        >
          {item.name}
        </Link> 
      </li>
    ))}
  </ul>
</div>
          </div>
        </div>

        {/* Bottom Bar with Divider */}
        <div className="mt-12 border-t border-[#0A66FF]/20">
          <div className="flex flex-col md:flex-col items-center">


            {/* Decorative Element */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#0A66FF] rounded-full animate-pulse"></span>
              <span className="text-gray-500 text-sm">Innovating The Digital Future</span>
              <span className="w-2 h-2 bg-[#FF7A00] rounded-full animate-pulse"></span>
            </div>
            <p className="text-gray-500 text-sm">
              ©2025  Webnity Global. All rights reserved.
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;