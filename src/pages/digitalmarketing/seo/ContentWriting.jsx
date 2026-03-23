// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   FiStar,
//   FiBookOpen,
//   FiTrendingUp,
//   FiUsers,
//   FiMessageCircle,
//   FiFileText,
// } from "react-icons/fi";

// export const ContentWriting = () => {
//   // Services with detailed descriptions
//   const services = [
//     {
//       title: "SEO Content Writing",
//       desc: "Take SEO content creation to the next level with top-of-the-line search engine optimization accompanying it. Our SEO content writing experts and SEO experts help you create the best web content that reaches far and creates a good impression.",
//     },
//     {
//       title: "Blog Content Writing",
//       desc: "Blogs have become a must for gaining high search engine rankings, but they can do so much more. We have experienced blog content writers who do thorough research to create relevant and enticing blogs.",
//     },
//     {
//       title: "Web Content Writing",
//       desc: "Your web content is the first thing visitors see. To keep their attention on your brand, your content copy has to be top-class. Our SEO-based website content writing services are sure to leave your readers wanting more.",
//     }
//   ]
//   // Benefit cards
//   const benefits = [
//     {
//       icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />,
//       title: "Make your brand stand out",
//       desc: "Since every online business is striving to garner attention, intriguing and appealing content for a website is a great way to stand out. We ensure that our experienced content writers will provide only the best blog & website content writing services for you.",
//     },
//     {
//       icon: <FiUsers className="text-3xl text-[#FF7A00]" />,
//       title: "Communicate to your followers",
//       desc: "Constant engaging content is a surefire way to humanize your brand and interact with your customers. We create content to draw your clients' attention and lead them down the conversion funnel.",
//     },
//     {
//       icon: <FiMessageCircle className="text-3xl text-[#FF7A00]" />,
//       title: "Reach your future audience",
//       desc: "Clever and engaging content fuels social media engagement. This way more and more people engage with your brand after already building a connection through your user-engaging content.",
//     },
//     {
//       icon: <FiFileText className="text-3xl text-[#FF7A00]" />,
//       title: "Leave a great impression on the readers",
//       desc: "With the ever-evolving online digital platforms, you need to make an impact with your content. This is where we come; our expert content writers deliver content that leaves a lasting impact.",
//     },
//   ];

//   // Case studies
//   const caseStudies = [
//     {
//       title: "E‑commerce Brand Boosts Organic Traffic by 180%",
//       desc: "How our SEO content writing helped a fashion retailer dominate search results.",
//       image: "https://placehold.co/600x400/0a1222/438bff?text=Case+Study+1",
//     },
//     {
//       title: "SaaS Company Gains 50% More Leads",
//       desc: "Blog content writing and eBooks that positioned them as industry thought leaders.",
//       image: "https://placehold.co/600x400/0a1222/FF7A00?text=Case+Study+2",
//     },
//     {
//       title: "Local Business Doubles Engagement",
//       desc: "Web content and newsletters that built a loyal community.",
//       image: "https://placehold.co/600x400/0a1222/438bff?text=Case+Study+3",
//     },
//   ];

//   // Testimonials
//   const testimonials = [
//     {
//       name: "Rahul Mehta",
//       role: "CEO, TechNova",
//       text: "TIS transformed our content strategy. The team's writing is engaging and SEO‑focused. Our traffic increased by 150% in just 4 months!",
//       rating: 5,
//     },
//     {
//       name: "Priya Singh",
//       role: "Marketing Head, StyleHub",
//       text: "Exceptional quality and timely delivery. Their blog content and product descriptions are top‑notch.",
//       rating: 5,
//     },
//     {
//       name: "Amit Sharma",
//       role: "Founder, FoodExpress",
//       text: "The eBooks and press releases they created helped us gain media coverage. Highly recommended!",
//       rating: 5,
//     },
//   ];

//   // Blog insights
//   const blogs = [
//     {
//       title: "10 SEO Content Writing Tips That Actually Work",
//       excerpt: "Learn how to create content that ranks and converts.",
//       link: "#",
//     },
//     {
//       title: "Why Blogging is Still King in 2025",
//       excerpt: "Discover the power of consistent, high‑quality blog posts.",
//       link: "#",
//     },
//     {
//       title: "The Art of Writing Compelling Product Descriptions",
//       excerpt: "Boost e‑commerce sales with persuasive copywriting.",
//       link: "#",
//     },
//   ];

//   // Slider settings
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

//   const testimonialSettings = {
//     ...sliderSettings,
//     slidesToShow: 3,
//   };

//   const blogSettings = {
//     ...sliderSettings,
//     slidesToShow: 3,
//   };

//   return (
//     <div className="bg-[#050B18] text-white">
//       {/* Hero Section */}
//       <section className="relative px-4 pt-20 pb-32 md:pt-28 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#0a1222] via-[#050B18] to-[#03070f] -z-10" />
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             Best Web & SEO Content Writing{" "}
//             <span className="text-[#FF7A00]">Agency in India</span>
//           </h1>
//           <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
//             Boost traffic, leads, and conversions with top-class content writing
//             services including web content writing, SEO content writing, product
//             description content writing, and blog content writing by expert
//             content writers.
//           </p>
//           <div className="mt-8">
//             <Link
//               to="/case-studies"
//               className="bg-[#FF7A00] hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 inline-block"
//             >
//               Explore Case Studies
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Professional Content Writing Services */}
//       <section className="py-20 bg-[#0a1222]">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               PROFESSIONAL CONTENT WRITING SERVICES FOR GROWTH
//             </h2>
//             <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4">
//               Unleash The Power Of Impactful Content For Your Business Offered
//               by Top Content Writing Company
//             </p>
//           </div>
//           <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12">
//             Content is the king when it comes to any form of digital presence.
//             Our top-class content writers create powerful, engaging content that
//             acts as a catalyst for your digital presence including search engine
//             optimization. We deliver insightful content writing for websites,
//             social media, paid campaigns, or search engine optimization that
//             boosts brand image and elevates marketing efforts, while also
//             matching every business' unique needs.
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

//       {/* Effective Content Writing Section with Service Descriptions */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             EFFECTIVE CONTENT WRITING TO ATTRACT MORE VIEWERS AND GAIN MORE LEADS
//           </h2>
//           <p className="text-center text-gray-400 mb-12">
//             The best content writing agency delivers Content Writing Services
//             that include:
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl"
//               >
//                 <img src="/content1.jpg" className="h-[250px] w-full"/>
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
//               Our Content Writing Case Studies
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
//                     src='/contentwriting1.jpg'
//                     alt={study.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2">{study.title}</h3>
//                     <p className="text-gray-400 text-sm mb-4">{study.desc}</p>
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
//             WRITING IMPACTFUL CONTENT FOR GLOBAL BRANDS
//           </h2>
//           <p className="text-gray-300 max-w-3xl mx-auto">
//             At TIS, we pride ourselves on understanding our client's needs,
//             creating enticing content, and delivering it on time. Since our
//             creation over 15 years, we have climbed the ladder to become a
//             leading agency among the best content writing companies. Thanks to
//             hundreds of completed projects, our eye-catching content, and a long
//             list of associated services.
//           </p>
//           <p className="text-gray-300 max-w-3xl mx-auto mt-4">
//             Whether your business needs content writing as part of a content
//             marketing campaign, search engine optimization campaign, or social
//             media campaign, we have plenty of experience in providing it. Our
//             work speaks for us as we have gotten our clients published on elite
//             sites such as Wired, Entrepreneur, SAP, Buzzfeed, and others.
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
//             Explore What Our Customers Say About TIS
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
//             INFORMATIVE GUIDE FOR CONTENT WRITING SERVICES
//           </h2>
//           <p className="text-center text-gray-400 mb-12">
//             All You Should Know About Content Writing Services
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What are the Benefits of Professional Content Writing Services?
//               </h3>
//               <p className="text-gray-400">
//                 Professional content writing boosts brand visibility, improves
//                 SEO rankings, engages audiences, and drives conversions.
//               </p>
//             </div>
//             <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What are the Proven Tips to Skyrocket Your SEO Content Writing?
//               </h3>
//               <p className="text-gray-400">
//                 Focus on keyword research, user intent, quality backlinks, and
//                 compelling headlines to maximize reach.
//               </p>
//             </div>
//             <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What are the Tips to Choose the Right Content Writing Agency?
//               </h3>
//               <p className="text-gray-400">
//                 Check their portfolio, client reviews, expertise in your
//                 industry, and ability to deliver original, SEO-friendly content.
//               </p>
//             </div>
//             <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What are the Biggest Mistakes you Should Avoid in Content Writing
//                 Services?
//               </h3>
//               <p className="text-gray-400">
//                 Avoid keyword stuffing, ignoring audience needs, plagiarized
//                 content, and lack of a clear content strategy.
//               </p>
//             </div>
//             <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What are the Questions you Must Ask Before Choosing Content
//                 Writers for your Project?
//               </h3>
//               <p className="text-gray-400">
//                 Ask about their research process, turnaround time, revision
//                 policy, and SEO expertise.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             FREQUENTLY ASKED QUESTIONS FOR CONTENT WRITING SERVICES
//           </h2>
//           <p className="text-center text-gray-400 mb-12">
//             Know All About Content Writing Services Offered By The Professional
//             Content Writing Agency
//           </p>
//           <div className="space-y-6">
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 Why should I Choose TIS for Content Writing Services?
//               </h3>
//               <p className="text-gray-400">
//                 TIS combines 15+ years of experience, a team of skilled writers,
//                 SEO expertise, and a client-centric approach to deliver
//                 high-quality, original content tailored to your brand.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 What is the Experience of your Writers?
//               </h3>
//               <p className="text-gray-400">
//                 Our writers are industry veterans with expertise across niches
//                 like technology, healthcare, e-commerce, and more. Many hold
//                 advanced degrees and have published work on major platforms.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 Is the Content that you Write Totally Unique and Original?
//               </h3>
//               <p className="text-gray-400">
//                 Absolutely. We guarantee 100% original content, thoroughly
//                 checked with plagiarism detection tools.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 Do I Own the Content that you Write for Me?
//               </h3>
//               <p className="text-gray-400">
//                 Yes, full rights are transferred to you upon final payment. You
//                 can use the content anywhere you wish.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 How Much do you Charge for your Content Writing and Marketing
//                 Services?
//               </h3>
//               <p className="text-gray-400">
//                 Our pricing is project‑based and depends on the scope,
//                 complexity, and volume. We offer flexible, affordable packages
//                 for businesses of all sizes.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 Is There a Minimum Number of hours that I have to hire you for?
//               </h3>
//               <p className="text-gray-400">
//                 No minimum hours. You can start with a small project and scale
//                 as needed. We're flexible to accommodate your requirements.
//               </p>
//             </div>
//             <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
//                 How do you Ensure Quality of Content Writing?
//               </h3>
//               <p className="text-gray-400">
//                 We have a rigorous multi‑step process: research, drafting,
//                 editing by senior writers, proofreading, and final QA to ensure
//                 accuracy, tone, and SEO alignment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

import React from 'react'

export const ContentWriting = () => {
  return (
    <div>
      content
    </div>
  )
}


