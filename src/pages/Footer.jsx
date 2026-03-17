// src/sections/Footer.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#050B18] border-t border-[#0A66FF]/20 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Company Info - Left Side */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              WEBNITY<span className="text-[#FF7A00]">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              20619 Torrence Chapel Rd<br />
              Suite 116 #1040<br />
              Cornelius, NC 28031<br />
              United States
            </p>
            
            <div className="space-y-3">
              <div>
                <p className="text-[#0A66FF] text-sm font-semibold mb-1">Phone number</p>
                <a href="tel:1-800-201-1019" className="text-gray-400 hover:text-[#FF7A00] text-sm transition">
                  1-800-201-1019
                </a>
              </div>
              
              <div>
                <p className="text-[#0A66FF] text-sm font-semibold mb-1">Email</p>
                <a href="mailto:support@webnity.com" className="text-gray-400 hover:text-[#FF7A00] text-sm transition">
                  support@webnity.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-lg">Quick links</h3>
            <ul className="space-y-3">
              {["Pricing", "Resources", "About us", "FAQ", "Contact us"].map((item) => (
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
              {["Facebook", "Instagram", "LinkedIn", "Twitter", "Youtube"].map((item) => (
                <li key={item}>
                  <a 
                    href={`https://${item.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF7A00] text-sm transition inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0A66FF] rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: "Terms of service", path: "/terms" },
                { name: "Privacy policy", path: "/privacy" },
                { name: "Cookie policy", path: "/cookies" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-[#FF7A00] text-sm transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Divider */}
        <div className="mt-12 pt-8 border-t border-[#0A66FF]/20">
          <div className="flex flex-col md:flex-col items-center gap-4">
            
            
            {/* Decorative Element */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#0A66FF] rounded-full animate-pulse"></span>
              <span className="text-gray-500 text-sm">Innovating The Digital Future</span>
              <span className="w-2 h-2 bg-[#FF7A00] rounded-full animate-pulse"></span>
            </div>
<p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} WEBNITY. All rights reserved.
            </p>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;