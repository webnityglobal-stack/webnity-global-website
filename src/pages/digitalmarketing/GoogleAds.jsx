import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
import {
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiTarget,
  FiSearch,
  FiMonitor,
  FiShoppingCart,
  FiSmartphone,
  FiBarChart2,
  FiDownload,
  FiStar,
  FiBookOpen,
} from "react-icons/fi";
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple} from "react-icons/fa";

const GoogleAds = () => {
  // Case Studies Data
  const caseStudies = [
    {
      title: "E‑commerce Giant Boosts ROI by 210%",
      desc: "How we scaled Google Shopping campaigns for a leading fashion brand.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=Case+Study+1",
    },
    {
      title: "SaaS Company Cuts CPA by 40%",
      desc: "Strategic search & display campaigns that delivered high-quality leads.",
      image: "https://placehold.co/600x400/0a1222/FF7A00?text=Case+Study+2",
    },
    {
      title: "Local Business Gets 300% More Calls",
      desc: "Hyper‑local Google Ads targeting with unmatched conversion rates.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=Case+Study+3",
    },
  ];

  // Brands for Slider
  const brands = [
    { name: "Google", icon: <FaGoogle className="text-3xl text-gray-400" /> },
    { name: "Amazon", icon: <FaAmazon className="text-3xl text-gray-400" /> },
    { name: "Microsoft", icon: <FaMicrosoft className="text-3xl text-gray-400" /> },
    { name: "Apple", icon: <FaApple className="text-3xl text-gray-400" /> },
    { name: "Stripe", icon: <FiStar className="text-3xl text-gray-400" /> },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "CEO, TechNova",
      text: "TIS transformed our PPC strategy. We saw a 150% increase in conversions within 3 months!",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Marketing Head, StyleHub",
      text: "Their Google Ads experts are incredible – they optimized every campaign to perfection.",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      role: "Founder, FoodExpress",
      text: "The team's transparent reporting and constant A/B testing doubled our ROAS.",
      rating: 5,
    },
  ];

  // Blog Insights Data
  const blogs = [
    {
      title: "Top 5 Google Ads Trends in 2025",
      excerpt: "Stay ahead with AI bidding, Performance Max, and audience signals.",
      link: "#",
    },
    {
      title: "How to Reduce CPA with Smart Bidding",
      excerpt: "Leverage machine learning to get more conversions at lower cost.",
      link: "#",
    },
    {
      title: "Shopping Ads: Secrets to High ROAS",
      excerpt: "Optimize product feeds and campaign structure for e‑commerce success.",
      link: "#",
    },
  ];

  // Service Cards
  const services = [
    {
      icon: <FiSearch className="text-3xl text-[#FF7A00]" />,
      title: "Search Network Campaign",
      desc: "Drive revenue and leads with targeted search ads. Our certified specialists monitor bids, keywords, and ads for optimal engagement.",
    },
    {
      icon: <FiMonitor className="text-3xl text-[#FF7A00]" />,
      title: "Display Network Campaign",
      desc: "Build brand awareness and drive action across millions of sites. Perfect for product consideration and retargeting.",
    },
    {
      icon: <FiShoppingCart className="text-3xl text-[#FF7A00]" />,
      title: "Shopping Campaign",
      desc: "Showcase products at the top of SERPs with Google Shopping Ads. We optimize for more sales, revenue, and ROI.",
    },
    {
      icon: <FiSmartphone className="text-3xl text-[#FF7A00]" />,
      title: "Responsive Ad Campaign",
      desc: "Ads that automatically adapt to fit any space. We handle creative optimization and performance analysis.",
    },
    {
      icon: <FiDownload className="text-3xl text-[#FF7A00]" />,
      title: "App Campaign",
      desc: "Increase app installs with Universal App Campaigns across Google Play, App Store, and our quality publisher network.",
    },
    {
      icon: <FiBarChart2 className="text-3xl text-[#FF7A00]" />,
      title: "Landing Page Optimization",
      desc: "Sales‑driven landing page design & A/B testing to maximize conversion rates.",
    },
  ];

  return (
    <main className="bg-[#050B18] text-white font-poppins overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 md:pt-28 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1222] via-[#050B18] to-[#03070f] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Best Google Ads Management <br />
            <span className="text-[#FF7A00]">Company in India</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            We offer quality Google Ads Services to help you grow your business to its maximum potential in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://wa.me/917303800109?text=Hi%20I%20want%20to%20know%20about%20Google%20Ads"
              className="border border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
            >
              Get Started 🚀
            </a>
          </div>
        </div>
      </section>

      {/* Right Audience / Tagline */}
      <section className="py-12 bg-[#0a1222]/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#438bff]">
            SERVE RIGHT ADS TO RIGHT AUDIENCE AT THE RIGHT TIME
          </h2>
          <p className="text-gray-300 mt-4 max-w-4xl mx-auto">
            Hire Top Google Ads Experts To Get The Most Value Out Of Your Spend. With a reach of more than 80% of internet users,
            Google is the world's largest and most powerful network. Through our Google Ads management services, we help you reach
            the audience who is interested in your products or services.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FiTrendingUp className="text-4xl text-[#FF7A00]" />,
                title: "Measured Results",
                desc: "One dashboard to track all campaigns and integrate Google Ads & Analytics to figure out what's working.",
              },
              {
                icon: <FiUsers className="text-4xl text-[#FF7A00]" />,
                title: "Pulls in Quality Traffic",
                desc: "Search engine traffic is the most potential traffic – increase revenue and leads using Google Ads.",
              },
              {
                icon: <FiZap className="text-4xl text-[#FF7A00]" />,
                title: "Instant Results",
                desc: "Start seeing results within one day after ad approval, and discover new keywords for organic marketing.",
              },
              {
                icon: <FiTarget className="text-4xl text-[#FF7A00]" />,
                title: "Unmatched Targeting",
                desc: "Reach both new audiences and existing customers with advanced PPC targeting options.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7A00]/10 transform hover:-translate-y-1"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Digital Presence */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              BUILD A POWERFUL DIGITAL PRESENCE WITH <br />
              <span className="text-[#438bff]">GOOGLE PAY-PER-CLICK ADVERTISING</span>
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              Grow Your Business Exponentially With The Best Google Ad Services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#050B18] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">CURATED SELECTION</h2>
            <p className="text-[#FF7A00] text-xl">Our Google Ads Management Case Studies</p>
            <p className="text-gray-400 mt-2">Real Client Stories That Show How We Turn Challenges Into Meaningful Results</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-12"
          >
            {caseStudies.map((study, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#0a1222] rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF7A00] transition-all">
                  <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{study.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Brands Slider */}
      <section className="py-16 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">WE ARE PROUD TO HAVE WORKED WITH THESE BRANDS</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            {brands.map((brand, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center justify-center p-4 bg-[#050B18] rounded-lg border border-gray-700 hover:border-[#FF7A00] transition-all">
                  <div className="text-4xl text-gray-400 mb-2">{brand.icon}</div>
                  <span className="text-white font-medium">{brand.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Customer Testimonials</h2>
          <p className="text-center text-gray-400 mb-12">Explore what our Customers say about TIS</p>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all">
                  <div className="flex gap-1 text-[#FF7A00] mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} fill="#FF7A00" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#438bff] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Blog Insights Slider */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Blog Insights</h2>
            <p className="text-[#438bff] text-lg">Trends Which Matter In The Digital World</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
          >
            {blogs.map((blog, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#050B18] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all h-full flex flex-col">
                  <FiBookOpen className="text-4xl text-[#FF7A00] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{blog.excerpt}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#050B18] to-[#0a1222]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Choose The Best Google Ads Management Company
          </h2>
          <p className="text-gray-300 text-lg mt-4">
            With TIS, get full Google Ads management service that gives your business the edge over competitors.
            Our certified PPC experts devise a custom strategy for your constraints and objectives.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/917303800109?text=Hi%20I%20want%20to%20know%20about%20Google%20Ads%20Services"
              className="inline-block bg-[#FF7A00] hover:bg-orange-500 text-white font-bold px-10 py-4 rounded-md text-lg transition-all transform hover:scale-105"
            >
              Talk to an Expert 🚀
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GoogleAds;