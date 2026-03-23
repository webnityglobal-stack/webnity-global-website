import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  FiMapPin,
  FiGlobe,
  FiFileText,
  FiMic,
  FiCpu,
  FiLayers,
  FiLink,
  FiAward,
  FiClock,
  FiDollarSign,
  FiMessageCircle,
} from "react-icons/fi";
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaAirbnb } from "react-icons/fa";

// ========================
// SERVICE COMPONENTS
// ========================

export const AISEO = () => {
  const features = [
    {
      icon: <FiCpu className="text-3xl text-[#FF7A00]" />,
      title: "LLM Optimization",
      desc: "Optimize for Gemini, ChatGPT – ensure your brand appears in AI answers.",
    },
    {
      icon: <FiMessageCircle className="text-3xl text-[#FF7A00]" />,
      title: "ChatGPT Optimization",
      desc: "Make content easy for ChatGPT to interpret and highlight.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />,
      title: "Generative Engine Optimization (GEO)",
      desc: "Position your brand in AI-driven search results.",
    },
    {
      icon: <FiTarget className="text-3xl text-[#FF7A00]" />,
      title: "Perplexity Optimization",
      desc: "Align content with Perplexity's response logic.",
    },
    {
      icon: <FiMonitor className="text-3xl text-[#FF7A00]" />,
      title: "Google AI Mode Optimization",
      desc: "Get noticed by AI-powered search on Google.",
    },
    {
      icon: <FiBarChart2 className="text-3xl text-[#FF7A00]" />,
      title: "Answer Engine Optimization (AEO)",
      desc: "Be included in AI-generated answers.",
    },
    {
      icon: <FiSmartphone className="text-3xl text-[#FF7A00]" />,
      title: "Gemini Optimization",
      desc: "Boost visibility on Google's Gemini AI platform.",
    },
    {
      icon: <FiZap className="text-3xl text-[#FF7A00]" />,
      title: "Microsoft Copilot Optimization",
      desc: "Deliver accurate AI-driven responses.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />,
      title: "AI Performance Metrics",
      desc: "Track content performance across AI and traditional search.",
    },
  ];

  const importanceCards = [
    {
      icon: <FiGlobe className="text-3xl text-[#FF7A00]" />,
      title: "Stronger Online Reach",
      desc: "Appear in more AI-driven search results, increasing visibility.",
    },
    {
      icon: <FiUsers className="text-3xl text-[#FF7A00]" />,
      title: "Precise Audience Targeting",
      desc: "Read user patterns and align content with real-time searches.",
    },
    {
      icon: <FiCpu className="text-3xl text-[#FF7A00]" />,
      title: "Smarter Content Recognition",
      desc: "AI tools quickly understand structured content.",
    },
    {
      icon: <FiMapPin className="text-3xl text-[#FF7A00]" />,
      title: "Local Search Advantage",
      desc: "Rank for 'near me' and intent-based local searches.",
    },
    {
      icon: <FiLayers className="text-3xl text-[#FF7A00]" />,
      title: "Better User Experience",
      desc: "Users find content that addresses their actual problems.",
    },
    {
      icon: <FiAward className="text-3xl text-[#FF7A00]" />,
      title: "Clear Competitive Advantage",
      desc: "Stand out while others struggle to adapt.",
    },
  ];

  const caseStudies = [
    {
      title: "AI SEO for E‑commerce Brand",
      desc: "Increased organic traffic by 210% using LLM optimization.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=AI+SEO+Case+1",
    },
    {
      title: "SaaS Company Dominates AI Search",
      desc: "Achieved 40% more visibility in ChatGPT responses.",
      image: "https://placehold.co/600x400/0a1222/FF7A00?text=AI+SEO+Case+2",
    },
    {
      title: "Healthcare Provider Boosts Authority",
      desc: "Featured in Gemini answers for key medical queries.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=AI+SEO+Case+3",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "CTO, TechNova",
      text: "TIS's AI SEO strategy put us in ChatGPT answers. Game changer!",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Marketing Head, StyleHub",
      text: "Our AI visibility skyrocketed. Highly recommended.",
      rating: 5,
    },
  ];

  const blogs = [
    {
      title: "Top 5 AI SEO Trends in 2025",
      excerpt: "How LLMs are reshaping search optimization.",
      link: "#",
    },
    {
      title: "Why Traditional SEO Isn't Enough",
      excerpt: "Embrace generative engine optimization.",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#050B18] text-white">
      {/* Hero */}
      <section className="relative px-4 pt-20 pb-32 md:pt-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1222] via-[#050B18] to-[#03070f] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Top AI SEO Agency in <span className="text-[#FF7A00]">India</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            TIS is one of the best AI SEO agencies that uses advanced strategies to help your website stand out across all major search engines, as well as virtual AI platforms. With cutting edge techniques, we do not just help you boost visibility but also attract focused traffic and improve organic growth that eventually helps you stay ahead of your competitors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://wa.me/917303800109?text=Hi%20I%20want%20to%20know%20about%20AI%20SEO"
              className="border border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
            >
              Get Your AI SEO Quote 🚀
            </a>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-12 bg-[#0a1222]/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#438bff]">
            RANK IN AI SEARCH. BOOST ENGAGEMENT. INCREASE REVENUE.
          </h2>
          <p className="text-gray-300 mt-4 max-w-4xl mx-auto">
            Build Your Presence in the AI-Powered Search Era with TIS. As AI-driven search engines evolve, staying visible is challenging. Our approach focuses on enhancing your presence across all emerging AI platforms so that your business ranks higher in generative search and attracts more organic traffic.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-center text-gray-400 mb-12">Our Comprehensive AI SEO Services in India</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional + AI Blend */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            TIS Elevates Your Strategy: Blending Traditional SEO with the Power of AI
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Traditional SEO gives your website a strong base, while LLM SEO adds speed, accuracy and deeper insights. Both matter and TIS knows how to blend them perfectly for the best results. As a leading LLM SEO company India, we bring together human expertise and smart AI tools to improve rankings faster and boost overall performance.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/917303800109?text=Hi%20I%20want%20to%20know%20about%20AI%20SEO%20strategy"
              className="inline-block bg-[#FF7A00] hover:bg-orange-500 text-white font-bold px-8 py-3 rounded-md"
            >
              Talk to Our Experts
            </a>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">The Importance of AI SEO Optimization</h2>
          <p className="text-center text-gray-400 mb-12">Why Your Brand Needs AI SEO Services Today</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importanceCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Slider */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">AI SEO IN ACTION</h2>
            <p className="text-[#FF7A00] text-xl">Our Featured AI SEO Projects</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="pb-12"
          >
            {caseStudies.map((study, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#050B18] rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF7A00]">
                  <img src='/aiseo1.jpg' alt={study.title} className="w-full h-48 object-cover" />
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

      {/* Testimonials Slider */}
      <section className="py-20">
        <div className="max-w-7xl  y- mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className=""
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx}>
                <div className=" bg-[#0a1222] p-6 rounded-xl border border-gray-800">
                  <div className="flex gap-1 text-[#FF7A00] mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <FiStar key={i} fill="#FF7A00" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{test.text}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#438bff] rounded-full flex items-center justify-center text-white font-bold">
                      {test.name[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold">{test.name}</h4>
                      <p className="text-gray-400 text-sm">{test.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Blogs Slider */}

      {/* FAQ Placeholder */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">What are LLM SEO services and how is it different from traditional SEO?</h3>
              <p className="text-gray-400">LLM SEO optimizes content for large language models like ChatGPT, ensuring your brand is accurately represented in AI-generated answers, while traditional SEO focuses on keyword rankings.</p>
            </div>
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">How is AI changing traditional SEO?</h3>
              <p className="text-gray-400">AI introduces generative search, where answers are synthesized rather than just links. Optimizing for AI platforms is now essential.</p>
            </div>
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">How long does AI SEO take to show results?</h3>
              <p className="text-gray-400">Initial improvements can be seen within 3-4 months, with significant authority building over 6-12 months.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};