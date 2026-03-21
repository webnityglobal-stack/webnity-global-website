import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const sliderItems = [
    "E-commerce Growth",
    "SEO Optimization",
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads",
    "Website Development",
    "Software Solutions",
    "Brand Strategy"
  ];

  return (
    <div className="bg-[#050B18] text-white overflow-hidden">

      {/* 🔥 HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          🌐 About Webnity Global
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Your Trusted Partner for Digital Growth & E-commerce Success 🚀
        </p>
      </section>

      {/* 🔥 CONTINUOUS SLIDER (NO GAP) */}
      <div className="overflow-hidden py-10 border-y border-blue-500">
        <div className="flex gap-6 animate-marquee">
          {[...sliderItems, ...sliderItems].map((item, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-[#0a1224] border border-blue-500 px-6 py-4 rounded-xl text-center font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <section className="px-6 md:px-20 py-16 space-y-14">

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Who We Are
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a1224] border border-blue-500 p-6 rounded-2xl"
          >
            <p className="text-gray-300 leading-7">
              Webnity Global is a leading digital marketing agency and e-commerce service provider in India, dedicated to helping businesses grow online with result-driven strategies and innovative technology solutions. We specialize in e-commerce management, digital marketing services, website development, software design, and professional training, making us a complete digital growth partner for modern businesses.
            </p>
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Our E-commerce Expertise
          </h2>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a1224] border border-blue-500 p-6 rounded-2xl"
          >
            <p className="text-gray-300 leading-7">
              With years of experience in the digital industry, we help brands establish a strong presence across top e-commerce platforms like Amazon, Flipkart, Blinkit, and JioMart. Our expert team handles everything from product listing optimization, catalog management, keyword research, and SEO-friendly content creation to PPC advertising and sales growth strategies, ensuring higher visibility and increased conversions.
            </p>
          </motion.div>
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Digital Marketing Services
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a1224] border border-blue-500 p-6 rounded-2xl"
          >
            <p className="text-gray-300 leading-7">
              As a performance-focused digital marketing company, we offer a wide range of services including Search Engine Optimization (SEO), Social Media Marketing (SMM), Pay-Per-Click Advertising (PPC), Meta Ads, Google Ads, and brand strategy development. Our data-driven approach helps businesses attract the right audience, improve engagement, and generate consistent leads and sales.
            </p>
          </motion.div>
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Website Development
          </h2>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a1224] border border-blue-500 p-6 rounded-2xl"
          >
            <p className="text-gray-300 leading-7">
              Our website development services are designed to create fast, responsive, and SEO-friendly websites that deliver an excellent user experience. Whether you need an e-commerce website, business website, landing page, or custom web solution, we ensure your website is optimized for performance, mobile compatibility, and search engine visibility.
            </p>
          </motion.div>
        </div>

        {/* SECTION 5 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Software Solutions
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a1224] border border-blue-500 p-6 rounded-2xl"
          >
            <p className="text-gray-300 leading-7">
              In addition to web development, Webnity Global provides advanced software design and development solutions tailored to your business needs. We develop scalable and secure software applications that help streamline business operations, automate processes, and improve efficiency. Our focus is on delivering user-friendly and high-performance digital solutions.
            </p>
          </motion.div>
        </div>

        {/* SECTION 6 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Training & Learning
          </h2>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a1224] border border-blue-500 p-6 rounded-2xl"
          >
            <p className="text-gray-300 leading-7">
              We also offer professional learning and training programs for individuals and businesses who want to build expertise in digital marketing, e-commerce management, and online business growth. Our training programs are practical, industry-oriented, and designed to help learners gain real-world skills that can be applied immediately.
            </p>
          </motion.div>
        </div>

        {/* SECTION 7 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Our Mission
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a1224] border border-blue-500 p-6 rounded-2xl"
          >
            <p className="text-gray-300 leading-7">
              At Webnity Global, our mission is to deliver high-quality digital solutions that drive measurable results. We believe in building long-term relationships with our clients by providing transparent services, continuous support, and performance-focused strategies. Our team works closely with every client to understand their business goals and create customized solutions that ensure success in the competitive digital landscape.
            </p>
          </motion.div>
        </div>

        {/* SECTION 8 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
            Why Choose Us
          </h2>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0a1224] border border-blue-500 p-6 rounded-2xl"
          >
            <p className="text-gray-300 leading-7">
              If you are looking for a reliable partner for e-commerce growth, digital marketing services, website development, or software solutions, Webnity Global is here to help you scale your business and achieve long-term success.
            </p>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default About;