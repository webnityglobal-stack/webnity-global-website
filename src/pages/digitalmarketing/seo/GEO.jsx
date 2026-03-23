import { FiFileText, FiGlobe, FiLink, FiMonitor, FiTarget, FiTrendingUp, FiStar, FiBookOpen, FiZap, FiCpu, FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GEO = () => {
  // Six Pillars of GEO Excellence
  const pillars = [
    {
      icon: <FiGlobe className="text-3xl text-[#FF7A00]" />,
      title: "Entity Authority",
      desc: "AI models don't rank pages – they evaluate entities. We create comprehensive entity profiles that establish your brand, products, and leadership as authoritative sources AI engines trust. This includes structured data implementation, knowledge graph optimization, and strategic mentions.",
    },
    {
      icon: <FiFileText className="text-3xl text-[#FF7A00]" />,
      title: "LLM-Optimized Content",
      desc: "Large language models process information differently. We reorganize content for optimal AI comprehension using clear hierarchies, definitive statements, and thorough context. Semantic markup helps AI understand relationships between concepts.",
    },
    {
      icon: <FiLink className="text-3xl text-[#FF7A00]" />,
      title: "Citation Engineering",
      desc: "Earning AI citations demands strategic positioning. We examine which content types generate citations across ChatGPT, Perplexity, and Claude. We implement author credentials, precise facts, and quotable statements that AI models extract cleanly.",
    },
    {
      icon: <FiTarget className="text-3xl text-[#FF7A00]" />,
      title: "Semantic Precision",
      desc: "AI models penalize ambiguity and reward clarity. We maximize semantic precision by using precise terminology, removing marketing fluff, and organizing information in logical progressive formats with explicit schema markup.",
    },
    {
      icon: <FiMonitor className="text-3xl text-[#FF7A00]" />,
      title: "Multi-Platform Optimization",
      desc: "Different AI engines prioritize different signals. We optimize for unique requirements simultaneously – ChatGPT, Perplexity, Claude, Google SGE, Bing Chat, and emerging platforms – ensuring visibility across all channels.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />,
      title: "Continuous Evolution",
      desc: "AI search technology changes monthly. We monitor AI model updates, analyze citation patterns, and adjust strategies before algorithm changes affect visibility. We stay ahead through research and industry connections.",
    },
  ];

  // Six-Phase Framework
  const phases = [
    {
      title: "Discovery Phase",
      desc: "Comprehensive AI visibility auditing across major generative platforms. Includes entity analysis, technical audits of structured data, and detailed AI Visibility reports.",
    },
    {
      title: "Strategy Phase",
      desc: "Architect GEO strategy tailored to your market position – focusing on high-value topics, quick-win optimizations, and long-term entity authority building.",
    },
    {
      title: "Optimization Phase",
      desc: "Transform existing content into AI citation magnets. Restructure for LLM comprehension, add clear hierarchies, and implement semantic improvements.",
    },
    {
      title: "Implementation Phase",
      desc: "Deploy optimized content across your digital ecosystem. Implement structured data site-wide, create knowledge bases, and train your team on GEO best practices.",
    },
    {
      title: "Monitoring Phase",
      desc: "Continuous AI citation performance tracking across major platforms. Daily monitoring of citation frequency, positioning, and context.",
    },
    {
      title: "Refinement Phase",
      desc: "Analyze monitoring data to identify underperforming content and experiment with new optimizations. Update strategies as AI models evolve.",
    },
  ];

  // Benefits (added)
  const benefits = [
    {
      icon: <FiZap className="text-3xl text-[#FF7A00]" />,
      title: "First Impressions in AI Search",
      desc: "When ChatGPT responds about your industry without mentioning your brand, you lose the opportunity. GEO ensures your brand appears in AI answers.",
    },
    {
      icon: <FiCpu className="text-3xl text-[#FF7A00]" />,
      title: "Consistent AI Citations",
      desc: "We ensure your brand is consistently cited across ChatGPT, Perplexity, Claude, and Google AI Overviews.",
    },
    {
      icon: <FiBarChart2 className="text-3xl text-[#FF7A00]" />,
      title: "Measurable AI Visibility",
      desc: "Proprietary tracking system monitors your citations across 12+ AI platforms daily, recording mention frequency and context.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />,
      title: "Competitive Advantage",
      desc: "Businesses that master GEO gain market share while competitors remain invisible in AI-generated responses.",
    },
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Fintech Firm Gains AI Citations",
      desc: "Appeared in 15+ ChatGPT answers within 3 months, increasing organic traffic by 120%.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=GEO+Case+1",
    },
    {
      title: "SaaS Startup Becomes AI Authority",
      desc: "Increased AI mentions by 300% and secured citations in Perplexity and Gemini responses.",
      image: "https://placehold.co/600x400/0a1222/FF7A00?text=GEO+Case+2",
    },
    {
      title: "Healthcare Provider Dominates AI Search",
      desc: "Featured in Google AI Overviews for 20+ high-value medical queries, driving qualified leads.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=GEO+Case+3",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "CEO, TechNova",
      text: "TIS's GEO strategy put us in ChatGPT and Google AI Overviews. Our authority in AI search is unmatched.",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Marketing Head, StyleHub",
      text: "Their citation engineering is top‑notch. We're now the go‑to source in AI answers.",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      role: "Founder, FoodExpress",
      text: "GEO transformed our visibility. Highly recommended for anyone serious about AI search.",
      rating: 5,
    },
  ];

  // Blog Insights
  const blogs = [
    {
      title: "What is Generative Engine Optimization (GEO)?",
      excerpt: "Learn how to optimize for AI‑powered search platforms.",
      link: "#",
    },
    {
      title: "How to Earn AI Citations in ChatGPT and Perplexity",
      excerpt: "Strategies to make your brand the trusted source.",
      link: "#",
    },
    {
      title: "Entity Authority: The Future of SEO",
      excerpt: "Why AI models prioritize entities over keywords.",
      link: "#",
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonialSettings = { ...sliderSettings, slidesToShow: 3 };
  const blogSettings = { ...sliderSettings, slidesToShow: 3 };

  return (
    <div className="bg-[#050B18] text-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 md:pt-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1222] via-[#050B18] to-[#03070f] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Leading <span className="text-[#FF7A00]">GEO Services</span> in India
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            AI-powered search is rewriting digital discovery. When prospects ask
            ChatGPT, Perplexity or Google's AI about solutions you offer, does
            your brand come up in the answer? Our generative engine optimization
            services make sure that your business gains visibility, authority
            and citations in each AI search platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://wa.me/917303800109?text=Hi%20I%20want%20to%20know%20about%20GEO"
              className="border border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
            >
              Request GEO Strategy Consultation 🚀
            </a>
          </div>
        </div>
      </section>

      {/* Future-Proof Section */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            FUTURE-PROOF YOUR SEARCH PRESENCE
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4">
            Award-Winning GEO Agency with 18+ Years Digital Excellence
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto mt-6">
            Traditional SEO optimizes for Google's algorithm. Generative Engine
            Optimization optimizes for the AI models that are answering
            questions directly. When AI engines develop answers, they cite
            sources, brands, and influence buying decisions. Businesses
            invisible in these AI-generated responses lose market share to
            rivals who have mastered this new frontier.
          </p>
          <p className="text-gray-300 max-w-4xl mx-auto mt-4">
            TIS provides AI generative search optimization services that make
            your brand the source of authority AI models reference. With 1250+
            clients across India, USA, and Sweden, we've been monitoring AI in
            Search since ChatGPT's emergence. Our methodology is research‑based,
            outcomes measurable, and methods updated as AI search technology
            progresses.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Transform AI Search Invisibility into Consistent Citations
          </h2>
          <p className="text-center text-gray-400 mb-12">
            First impressions in AI search occur before users visit your website
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7A00]/10 transform hover:-translate-y-1"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Pillars Section */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            SIX PILLARS DRIVING GEO EXCELLENCE
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Our methodology is built on these six core principles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#050B18] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-gray-400 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six-Phase Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            PROVEN GEO METHODOLOGY
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Our Six-Phase Framework for Generative Engine Optimization Excellence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-[#0a1222] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Slider */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">PROVEN RESULTS</h2>
            <p className="text-[#FF7A00] text-xl">
              GEO Case Studies and Success Stories
            </p>
            <p className="text-gray-400 mt-2">
              Real Client Stories That Show How We Turn Challenges Into
              Meaningful Results
            </p>
          </div>
          <Slider {...sliderSettings}>
            {caseStudies.map((study, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-[#050B18] rounded-xl overflow-hidden border border-gray-800 hover:border-[#FF7A00] transition-all h-full">
                  <img
                    src='/geoseo1.webp'
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{study.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Industry-Specific Generative Engine Optimization Solutions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our client base ranges from early‑stage startups to multinational
            enterprises. We've optimized content for healthcare, finance,
            technology, legal, B2B SaaS, eCommerce, and more. Cross‑industry
            experience produces better results – insights from one sector
            enhance strategies in another.
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Specialized GEO capabilities include B2B SaaS AI citation
            strategies, healthcare provider entity authority, financial services
            compliance‑aware GEO, legal practice thought leadership
            optimization, and eCommerce product discovery in AI search.
          </p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            What GEO Clients Say
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Explore what our Customers say about TIS
          </p>
          <Slider {...testimonialSettings}>
            {testimonials.map((test, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-[#050B18] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all">
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
              </div>
            ))}
          </Slider>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Frequently Asked Questions About GEO
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Considering GEO for your business? Here's what you need to know.
          </p>
          <div className="space-y-6">
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                What exactly is Generative Engine Optimization and how does it differ from traditional SEO?
              </h3>
              <p className="text-gray-400">
                GEO optimizes content for AI‑powered search engines like
                ChatGPT, Perplexity, and Google AI Overviews, ensuring your
                brand appears in generated answers. Traditional SEO focuses on
                ranking in standard search results.
              </p>
            </div>
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How do you measure success in GEO campaigns?
              </h3>
              <p className="text-gray-400">
                We track AI citation frequency across platforms, brand mention
                context, competitor comparisons, and the quality of
                AI‑generated answers that include your content.
              </p>
            </div>
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                Which AI platforms do you optimize for?
              </h3>
              <p className="text-gray-400">
                ChatGPT, Perplexity, Claude, Google AI Overviews, Bing Chat, and
                emerging platforms like Gemini and Copilot.
              </p>
            </div>
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How long does it take to see results from GEO?
              </h3>
              <p className="text-gray-400">
                Initial AI citations can appear within 2‑3 months; building
                sustained authority typically takes 4‑6 months.
              </p>
            </div>
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                What makes TIS different from other agencies?
              </h3>
              <p className="text-gray-400">
                We have 18+ years of search experience, proprietary AI citation
                tracking, research‑backed methodology, and multi‑platform
                mastery. We don't just optimize – we define best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};