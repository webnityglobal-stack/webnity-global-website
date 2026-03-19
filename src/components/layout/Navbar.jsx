import Button from "../common/Button"
import Blurtext from "../common/Blurtext"
import { Link } from "react-router-dom"
import { FiAlignRight } from "react-icons/fi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";
import Amazon from "@/pages/ecommerce/Amazon";

const Navbar = () => {
   const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-[#050B18]">
      <div className=" lg:mx-auto lg:w-auto w-full px-6">
        <div className="flex items-center justify-between py-4">
<div className="flex flex-col ">
  <div className="text-[#438bff] text-2xl font-poppins font-bold">
    <Blurtext text="Webnity Global" />
  </div>

  <div className="text-[#438bff] text-sm  font-medium ">
    <Blurtext text="Innovating The Digital Future" />
  </div>
</div>

          {/* Nav Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-white">
            <li>
              <Link to="/" className="hover:text-[#FF7A00] transition">Home</Link>
            </li>

            {/* Ecommerce Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#FF7A00] transition">Ecommerce</span>
              <ul className="absolute left-0 top-full shadow-sm shadow-[#FF7A00] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 bg-[#050B18] rounded-md p-4 w-48">
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/ecommerce/amazon">
                    Amazon
                  </Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/ecommerce/flipkart">Flipkart</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/ecommerce/meesho">Meesho</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/ecommerce/myntra">Myntra</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/ecommerce/nykaa">Nykaa</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/ecommerce/quickmarket">QuickMarket</Link>
                </li>
              </ul>
            </li>

            {/* Web Development Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#FF7A00] transition">Web Development</span>
              <ul className="absolute left-0 top-full shadow-sm shadow-[#FF7A00] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 bg-[#050B18] rounded-md p-4 w-48">
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/web/app-design">App Design</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/web/web-design">Web Design</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/web/crm">CRM</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/web/software">Softwares</Link>
                </li>
              </ul>
            </li>

            {/* Digital Marketing Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#FF7A00] transition">Digital Marketing</span>
              <ul className="absolute left-0 top-full shadow-sm shadow-[#FF7A00] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 bg-[#050B18] rounded-md p-4 w-48">
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/marketing/google-ads">Google Ads</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/marketing/seo">SEO</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/marketing/meta-ads">Meta Ads</Link>
                </li>
              </ul>
            </li>

            {/* Learning Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#FF7A00] transition">Learning</span>
              <ul className="absolute left-0 top-full shadow-sm shadow-[#FF7A00] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 bg-[#050B18] rounded-md p-4 w-48">
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/learning/ecommerce">E-commerce Platform</Link>
                </li>
                <li className="py-1 hover:text-[#FF7A00]">
                  <Link to="/learning/digital-marketing">Digital Marketing</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/clients" className="hover:text-[#FF7A00] transition">Our Clients</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#FF7A00] transition">About Us</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-[#FF7A00] transition">Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#FF7A00] transition">Contact Us</Link>
            </li>
          </ul>

          {/* CTA */}
          <Button className="hidden lg:flex ">
            GET CONSULTATION
          </Button>


          {/* for mobile view */}
          <div className="flex lg:hidden">
           
<Sheet>
  <SheetTrigger> <FiAlignRight className="text-[#438bff] text-2xl" /></SheetTrigger>
  <SheetContent className="bg-[#050B18] [&>button]:text-white">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <SheetDescription>
        {/* container */}
        <div >
            {/* Nav Links */}
        <ul className="flex flex-col gap-5 font-medium text-black mt-6">

      <li>
        <Link to="/" className="text-white">Home</Link>
      </li>

      {/* Ecommerce */}
      <li>
        <div
          onClick={() => toggleMenu("ecommerce")}
          className="flex justify-between items-center cursor-pointer text-[#438bff] font-semibold"
        >
          Ecommerce
          <span>{openMenu === "ecommerce" ? "-" : "+"}</span>
        </div>

        {openMenu === "ecommerce" && (
          <ul className="pl-4 mt-2 flex flex-col gap-2">
            <li><Link to="/ecommerce/amazon">Amazon</Link></li>
            <li><Link to="/ecommerce/flipkart">Flipkart</Link></li>
            <li><Link to="/ecommerce/meesho">Meesho</Link></li>
            <li><Link to="/ecommerce/myntra">Myntra</Link></li>
            <li><Link to="/ecommerce/nykaa">Nykaa</Link></li>
            <li><Link to="/ecommerce/quickmarket">QuickMarket</Link></li>
          </ul>
        )}
      </li>

      {/* Web Development */}
      <li>
        <div
          onClick={() => toggleMenu("web")}
          className="flex justify-between items-center cursor-pointer text-[#438bff] font-semibold"
        >
          Web Development
          <span>{openMenu === "web" ? "-" : "+"}</span>
        </div>

        {openMenu === "web" && (
          <ul className="pl-4 mt-2 flex flex-col gap-2">
            <li><Link to="/web/app-design">App Design</Link></li>
            <li><Link to="/web/web-design">Web Design</Link></li>
            <li><Link to="/web/crm">CRM</Link></li>
            <li><Link to="/web/software">Softwares</Link></li>
          </ul>
        )}
      </li>

      {/* Digital Marketing */}
      <li>
        <div
          onClick={() => toggleMenu("marketing")}
          className="flex justify-between items-center cursor-pointer text-[#438bff] font-semibold"
        >
          Digital Marketing
          <span>{openMenu === "marketing" ? "-" : "+"}</span>
        </div>

        {openMenu === "marketing" && (
          <ul className="pl-4 mt-2 flex flex-col gap-2">
            <li><Link to="/marketing/google-ads">Google Ads</Link></li>
            <li><Link to="/marketing/seo">SEO</Link></li>
            <li><Link to="/marketing/meta-ads">Meta Ads</Link></li>
          </ul>
        )}
      </li>

      {/* Learning */}
      <li>
        <div
          onClick={() => toggleMenu("learning")}
          className="flex justify-between items-center cursor-pointer text-[#438bff] font-semibold"
        >
          Learning
          <span>{openMenu === "learning" ? "-" : "+"}</span>
        </div>

        {openMenu === "learning" && (
          <ul className="pl-4 mt-2 flex flex-col gap-2">
            <li><Link to="/learning/ecommerce" >E-commerce Platform</Link></li>
            <li><Link to="/learning/digital-marketing">Digital Marketing</Link></li>
          </ul>
        )}
      </li>

      <li><Link to="/clients" className="text-white">Our Clients</Link></li>
      <li><Link to="/about" className="text-white">About Us</Link></li>
      <li><Link to="/blogs" className="text-white">Blogs</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>

      <li className="mt-4">
        <Button className="w-full">GET CONSULTATION</Button>
      </li>

    </ul>

        </div>
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
       <div className="flex flex-col gap-6 mt-6">

      {/* Company Info */}
      <div>
        <h2 className="text-[#438bff] text-xl font-bold">WEBNITY Global</h2>
        <p className="text-sm mt-2 text-gray-400">
          LG-45, Orbit plaza, 201009 <br />
          Lower Ground <br />
          Ghaziabad, Uttar Pradesh <br />
          India
        </p>

        <p className="mt-3 text-sm text-gray-400">
          <span className="text-[#438bff]">Phone:</span> +91 7303800109
        </p>
        <p className="text-sm text-gray-400">
          <span className="text-[#438bff]">Email:</span> webnityglobal@gmail.com
        </p>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>Innovating The Digital Future</p>
        <p>©2025 WEBNITY Global. All rights reserved.</p>
      </div>

    </div>

    </SheetFooter>
  </SheetContent>
  
</Sheet>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar