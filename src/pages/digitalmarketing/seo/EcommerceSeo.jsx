// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   FiStar,
//   FiBookOpen,
//   FiTrendingUp,
//   FiUsers,
//   FiTarget,
//   FiShoppingCart,
//   FiSearch,
//   FiBarChart2,
// } from "react-icons/fi";

// export const EcommerceSEO = () => {
//   // Benefit cards
//   const benefits = [
//     {
//       icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />,
//       title: "Building Brand Image and Recognition",
//       desc: "Our team of eCommerce SEO experts is skilled at optimizing your eCommerce website such that it makes the most of the search engine algorithms. Also, there is a significant rise in the number of new visitors and potential customers, resulting in better brand visibility.",
//     },
//     {
//       icon: <FiShoppingCart className="text-3xl text-[#FF7A00]" />,
//       title: "Growth in Sales and Revenue",
//       desc: "Search engine optimization for eCommerce websites puts you ahead of your competitors. Our clients report realizing dramatic rises in sales and revenue figures. Now, you make your eCommerce website stand out from the rest by hiring one of our eCommerce SEO Consultants.",
//     },
//     {
//       icon: <FiUsers className="text-3xl text-[#FF7A00]" />,
//       title: "Engagement",
//       desc: "Regardless of what kind of business you run online, user engagement is always an important factor. And our team of eCommerce SEO experts optimizes your website such that your business sees a significant rise in engagement, resulting in the overall growth of the business.",
//     },
//     {
//       icon: <FiTarget className="text-3xl text-[#FF7A00]" />,
//       title: "Increased Visibility",
//       desc: "Having your eCommerce website rank among the first few results increases your prospects of gaining new customers by a good measure. So contact us to hire an expert to audit the SEO for eCommerce website and fine-tune it for the best results.",
//     },
//   ];

//   // Service cards with descriptions
//   const services = [
//     {
//       title: "Product Optimization",
//       desc: "Sometimes it takes a little more than just tweaking around with the eCommerce website to make it rank higher. We have dedicated teams of eCommerce SEO consultants who specialize in product optimization in order to make sure that you bag the first spot on search engine results.",
//     },
//     {
//       title: "Keyword And Opportunity Research",
//       desc: "Our eCommerce SEO professionals are great at researching keywords and finding opportunities to link to other pages of your website, which helps greatly in boosting results on search engines.",
//     },
//     {
//       title: "ECommerce SEO Audit",
//       desc: "Making it to the top of major search engines' rankings is not an easy feat by any means, but is very achievable. Hire the best SEO services for eCommerce Websites to conduct a comprehensive audit of your website, so you get ahead of the competition.",
//     },
//     {
//       title: "WebSite Optimization",
//       desc: "By carefully evaluating every nook and cranny, our experts in SEO for eCommerce Websites, optimize your website so you get the exposure you deserve by ranking higher up on search engine results.",
//     },
//     {
//       title: "Content And Link Building",
//       desc: "Our dedicated teams of eCommerce SEO professionals are skilled at making wonders happen for eCommerce businesses by employing content marketing and link-building strategies that make marketing viable and increase outreach.",
//     },
//     {
//       title: "Traffic Funneling Strategy",
//       desc: "This type of testing allows our skilled team to come up with hypotheses for better conversion rates and then test them on your website. New landing page designs are created and tested among users to see, which drives more conversions.",
//     },
//   ];

//   // Case studies
//   const caseStudies = [
//     {
//       title: "Fashion Retailer Boosts Organic Sales by 210%",
//       desc: "How we optimized product pages and category structure to drive massive revenue growth.",
//       image: "https://placehold.co/600x400/0a1222/438bff?text=eCommerce+Case+1",
//     },
//     {
//       title: "Electronics Store Achieves 150% ROI Increase",
//       desc: "Strategic keyword research and link building for competitive niche.",
//       image: "https://placehold.co/600x400/0a1222/FF7A00?text=eCommerce+Case+2",
//     },
//     {
//       title: "Health & Wellness Brand Dominates Search",
//       desc: "Comprehensive SEO audit and content optimization leading to first-page rankings.",
//       image: "https://placehold.co/600x400/0a1222/438bff?text=eCommerce+Case+3",
//     },
//   ];

//   // Testimonials
//   const testimonials = [
//     {
//       name: "Rahul Mehta",
//       role: "CEO, TechNova",
//       text: "TIS transformed our eCommerce SEO. Our organic traffic doubled in 6 months!",
//       rating: 5,
//     },
//     {
//       name: "Priya Singh",
//       role: "Marketing Head, StyleHub",
//       text: "The team's product optimization and link building strategies are outstanding.",
//       rating: 5,
//     },
//     {
//       name: "Amit Sharma",
//       role: "Founder, FoodExpress",
//       text: "We saw a 120% increase in conversions after their SEO audit. Highly recommended!",
//       rating: 5,
//     },
//   ];

//   // Blog insights
//   const blogs = [
//     {
//       title: "10 eCommerce SEO Strategies That Actually Work",
//       excerpt: "Learn how to optimize product pages and category structures.",
//       link: "#",
//     },
//     {
//       title: "How to Optimize for Voice Search in eCommerce",
//       excerpt: "Adapt your product descriptions for voice‑assisted shopping.",
//       link: "#",
//     },
//     {
//       title: "The Ultimate Guide to Structured Data for eCommerce",
//       excerpt: "Boost your visibility with rich snippets and schema markup.",
//       link: "#",
//     },
//   ];

//   // Slider settings (responsive)
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   const testimonialSettings = { ...sliderSettings, slidesToShow: 3 };
//   const blogSettings = { ...sliderSettings, slidesToShow: 3 };

//   return (
//     <div className="bg-[#050B18] text-white">
//       {/* Hero Section */}
//       <section className="relative px-4 pt-20 pb-32 md:pt-28 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0a1222] via-[#050B18] to-[#03070f] -z-10" />
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             Best eCommerce SEO Services{" "}
//             <span className="text-[#FF7A00]">Company in India</span>
//           </h1>
//           <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
//             Increase traffic and sales on your eCommerce Website by partnering
//             with the top eCommerce SEO Agency in India.
//           </p>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20 bg-[#0a1222]">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               BEST SEO SERVICES FOR eCOMMERCE WEBSITES
//             </h2>
//             <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4">
//               Hire Top eCommerce SEO Company To Deliver SEO for eCommerce
//               Websites
//             </p>
//           </div>
//           <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12">
//             eCommerce websites lose out on a sizeable amount of traffic simply
//             because their websites are not optimized for search engines and
//             hence, SEO for eCommerce Product Pages becomes imperative.
//             Optimizing your eCommerce website means a lot in terms of building
//             brand image, greater engagement, increased visibility, and
//             significant growth in sales and revenue as a result of this
//             increased visibility.
//           </p>

//           {/* Benefits Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {benefits.map((benefit, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#050B18] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7A00]/10 transform hover:-translate-y-1"
//               >
//                 <div className="mb-4">{benefit.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
//                 <p className="text-gray-400 text-sm">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Cards with Descriptions */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             OFFERING SEO FOR eCOMMERCE WEBSITE PRODUCT PAGES
//           </h2>
//           <p className="text-center text-gray-400 mb-12">
//             Top eCommerce SEO Agency Delivering A Suite Of eCommerce SEO
//             Services
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl"
//               >
//                 <h3 className="text-xl font-bold mb-2 text-[#FF7A00]">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies Slider */}
//       <section className="py-20 bg-[#0a1222]">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-white">CURATED SELECTION</h2>
//             <p className="text-[#FF7A00] text-xl">
//               Our Ecommerce SEO Case Studies
//             </p>
//             <p className="text-gray-400 mt-2">
//               Real Client Stories That Show How We Turn Challenges Into
//               Meaningful Results
//             </p>
//           </div>
//           <Slider {...sliderSettings}>
//             {caseStudies.map((study, idx) => (
//               <div key={idx} className="px-2">
//                 <div className="bg-[#050B18] rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF7A00] transition-all h-full">
//                   <img
//                     src='/ecommerce.webp'
//                     alt={study.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2">{study.title}</h3>
//                     <p className="text-gray-400 text-sm mb-4">{study.desc}</p>\
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>

//       {/* Global Brands Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">
//             BEST eCOMMERCE SEO COMPANY
//           </h2>
//           <p className="text-gray-300 max-w-3xl mx-auto">
//             As a premier eCommerce SEO agency, our clients are among the biggest
//             names in their respective industries such as Pets World, POC,
//             SuperVapeStore, ikoala.com.au and several others. Contact us to
//             boost your SEO for an eCommerce website to the very top of the
//             search engine results.
//           </p>
//         </div>
//       </section>

//       {/* Testimonials Slider */}
//       <section className="py-20 bg-[#0a1222]">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             Customer Testimonials
//           </h2>
//           <p className="text-center text-gray-400 mb-12">
//             Explore what our Customers say about TIS
//           </p>
//           <Slider {...testimonialSettings}>
//             {testimonials.map((test, idx) => (
//               <div key={idx} className="px-2">
//                 <div className="bg-[#050B18] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all">
//                   <div className="flex gap-1 text-[#FF7A00] mb-4">
//                     {[...Array(test.rating)].map((_, i) => (
//                       <FiStar key={i} fill="#FF7A00" />
//                     ))}
//                   </div>
//                   <p className="text-gray-300 italic">"{test.text}"</p>
//                   <div className="mt-4 flex items-center gap-3">
//                     <div className="w-10 h-10 bg-[#438bff] rounded-full flex items-center justify-center text-white font-bold">
//                       {test.name[0]}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">{test.name}</h4>
//                       <p className="text-gray-400 text-sm">{test.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>

//       {/* Blog Insights Slider */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-white">Blog Insights</h2>
//             <p className="text-[#438bff] text-lg">
//               Trends Which Matter In The Digital World
//             </p>
//           </div>
//           <Slider {...blogSettings}>
//             {blogs.map((blog, idx) => (
//               <div key={idx} className="px-2">
//                 <div className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all h-full flex flex-col">
//                   <FiBookOpen className="text-4xl text-[#FF7A00] mb-4" />
//                   <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
//                   <p className="text-gray-400 mb-4 flex-grow">{blog.excerpt}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>

//       {/* Informative Guide */}
//       <section className="py-20 bg-[#0a1222]">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             INFORMATIVE GUIDE FOR eCOMMERCE SEO SERVICES
//           </h2>
//           <p className="text-center text-gray-400 mb-12">
//             All You Should Know About eCommerce SEO
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
//                <div className="p-2">
//                  <img src="/ecomseo.webp" alt="seo image" className="object-cover"/>
//                </div>
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What are the Benefits of eCommerce SEO?
//               </h3>
//               <p className="text-gray-400">
//                 eCommerce SEO increases visibility, drives targeted traffic,
//                 builds brand authority, and boosts sales and revenue.
//               </p>
//             </div>
//             <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
//                 <div className="p-2">
//                  <img src="/ecomseo.webp" alt="seo image" className="object-cover"/>
//                </div>
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 How to Optimize Product Pages for SEO?
//               </h3>
//               <p className="text-gray-400">
//                 Focus on unique product descriptions, high‑quality images,
//                 customer reviews, and structured data.
//               </p>
//             </div>
//             <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
//                 <div className="p-2">
//                  <img src="/ecomseo.webp" alt="seo image" className="object-cover"/>
//                </div>
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What are the Common eCommerce SEO Mistakes?
//               </h3>
//               <p className="text-gray-400">
//                 Duplicate content, poor site architecture, ignoring mobile
//                 optimization, and missing schema markup.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             FREQUENTLY ASKED QUESTIONS FOR eCOMMERCE SEO
//           </h2>
//           <p className="text-center text-gray-400 mb-12">
//             Know All About eCommerce SEO Services Offered By The Professional
//             Agency
//           </p>
//           <div className="space-y-6">
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 Why is eCommerce SEO important for my online store?
//               </h3>
//               <p className="text-gray-400">
//                 eCommerce SEO helps your products get discovered by potential
//                 customers, increases organic traffic, and drives sales without
//                 relying solely on paid ads.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 How long does eCommerce SEO take to show results?
//               </h3>
//               <p className="text-gray-400">
//                 Typically 3‑6 months for significant improvements, depending on
//                 competition, site authority, and optimization efforts.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 Do I need a separate SEO strategy for each product category?
//               </h3>
//               <p className="text-gray-400">
//                 Yes, different categories target different keywords and user
//                 intents. A tailored approach yields the best results.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What is the cost of professional eCommerce SEO services?
//               </h3>
//               <p className="text-gray-400">
//                 Costs vary based on the size of your store, competition, and
//                 scope. We offer flexible packages to suit businesses of all
//                 sizes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
import React from 'react'

export const EcommerceSEO = () => {
  return (
    <div>
      ecoomerce
    </div>
  )
}



