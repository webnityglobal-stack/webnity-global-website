import Button from "../common/Button"
import Blurtext from "../common/Blurtext"
import { Link } from "react-router-dom"
import { FiAlignRight } from "react-icons/fi";
const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-[#050B18]">
      <div className=" lg:mx-auto lg:w-auto w-full px-6">
        <div className="flex items-center justify-between py-4">

          {/* Logo - shortened text */}
         {/* <div className="flex flex-col gap-0 m-0">
           <div className=" text-[#0A66FF] ">
            <Blurtext text="WEBNITY Global" />
          </div>

           <div className="w-40 text-[#0A66FF]  mt-0 ">
            <Blurtext text="Innovating The Digital Future" />
          </div>[#5795ebfb]
         </div> */}
         {/* Logo - shortened text */}
{/* Logo - shortened text */}
<div className="flex flex-col ">
  <div className="text-[#438bff] text-2xl font-poppins font-bold">
    <Blurtext text="WEBNITY Global" />
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
                  <Link to="/ecommerce/amazon">Amazon</Link>
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
            <FiAlignRight className="text-[#438bff] text-2xl" />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar