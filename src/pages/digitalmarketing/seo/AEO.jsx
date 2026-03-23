import { FiBookOpen, FiFileText, FiGlobe, FiMessageCircle, FiMonitor, FiTrendingUp, FiStar, FiTarget, FiSearch, FiZap, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AEO = () => {
  // Methodology features (6 pillars)
  const features = [
    { icon: <FiGlobe className="text-3xl text-[#FF7A00]" />, title: "Entity-First Strategy", desc: "Build optimization based on entities, not keywords. Define clear entity attributes and develop content to reinforce connections." },
    { icon: <FiMessageCircle className="text-3xl text-[#FF7A00]" />, title: "Conversational Intent Mapping", desc: "Analyze how users actually phrase queries on voice search, chatbot interactions, and AI platforms. Map conversational patterns to your content strategy." },
    { icon: <FiFileText className="text-3xl text-[#FF7A00]" />, title: "Structured Data Mastery", desc: "Add schema markup across your digital properties – FAQ, How-To, Article, Organization, Product schema. Build out relationships between your content pieces." },
    { icon: <FiBookOpen className="text-3xl text-[#FF7A00]" />, title: "Answer-First Content Architecture", desc: "Reconstruct content based on the questions your audience asks. Use clear question headers, short direct answers, and full coverage of related questions." },
    { icon: <FiMonitor className="text-3xl text-[#FF7A00]" />, title: "Multi-Platform Answer Optimization", desc: "Optimize for Google's AI Overviews, Bing Chat, ChatGPT, Claude, Gemini, Perplexity, and voice assistants. Test performance from a platform perspective." },
    { icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />, title: "Continuous Learning Integration", desc: "Monitor your visibility across AI platforms, analyze competitor answer engine visibility, identify new questions, and adjust strategies as things change." },
  ];

  // Benefit cards (added from original AEO concept)
  const benefits = [
    {
      icon: <FiTarget className="text-3xl text-[#FF7A00]" />,
      title: "Featured Snippet Capture",
      desc: "Optimize for Google's featured snippets and AI Overviews to appear as the direct answer.",
    },
    {
      icon: <FiZap className="text-3xl text-[#FF7A00]" />,
      title: "Voice Search Optimization",
      desc: "Prepare your content for conversational voice queries across Alexa, Siri, and Google Assistant.",
    },
    {
      icon: <FiUsers className="text-3xl text-[#FF7A00]" />,
      title: "Authority Building",
      desc: "Establish your brand as the trusted source AI engines reference in generated answers.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />,
      title: "Measurable Visibility",
      desc: "Track featured snippet capture rates, AI citations, and voice search performance.",
    },
  ];

  // Case studies (custom for AEO)
  const caseStudies = [
    {
      title: "SaaS Company Dominates AI Answers",
      desc: "How we secured featured snippets and ChatGPT citations for a B2B tech client.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=AEO+Case+1",
    },
    {
      title: "Healthcare Provider Becomes Voice Search Authority",
      desc: "Optimized for conversational queries, leading to 200% more voice search traffic.",
      image: "https://placehold.co/600x400/0a1222/FF7A00?text=AEO+Case+2",
    },
    {
      title: "E‑commerce Brand Captures AI Overviews",
      desc: "Structured data and answer-first content boosted visibility in Google's AI Overviews.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=AEO+Case+3",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "CEO, TechNova",
      text: "TIS's AEO strategy got us featured in ChatGPT and Google AI Overviews. Our brand authority skyrocketed!",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Marketing Head, StyleHub",
      text: "Their answer‑first content and schema implementation are top‑notch. Highly recommended.",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      role: "Founder, FoodExpress",
      text: "We now appear in voice search results. The team is truly ahead of the curve.",
      rating: 5,
    },
  ];

  // Blog insights
  const blogs = [
    {
      title: "What is Answer Engine Optimization?",
      excerpt: "Learn how to optimize for AI‑powered answers and voice search.",
      link: "#",
    },
    {
      title: "How to Get Featured in ChatGPT Responses",
      excerpt: "Strategies to make your brand the source AI models cite.",
      link: "#",
    },
    {
      title: "Schema Markup for AEO: A Complete Guide",
      excerpt: "Master structured data to help answer engines understand your content.",
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
            AEO Services in <span className="text-[#FF7A00]">India</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            Modern search is not a matter of rankings anymore. AI-powered answer
            engines such as ChatGPT, Gemini, and Perplexity are now determining
            how customers discover information. TIS provides answer engine
            optimization services that make your brand the authoritative source
            in AI-generated answers, voice queries and conversational queries
            across all platforms.
          </p>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              LEADING AI SEARCH VISIBILITY
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4">
              Award-Winning AEO Agency Serving Global Brands
            </p>
          </div>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12">
            The digital landscape has fundamentally shifted. Your potential
            customers no longer just click through search results – they get
            answers directly from AI assistants, voice devices, and answer
            engines. If your content isn't optimized for these platforms, you're
            invisible to a rapidly growing chunk of search traffic. Companies
            lose qualified leads every day because their competitors appear in
            AI responses when they are not.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#050B18] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7A00]/10 transform hover:-translate-y-1"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">OUR METHODOLOGY</h2>
          <p className="text-center text-gray-400 mb-12">Six Principles Driving AEO Excellence</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4">{feat.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Slider */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">CURATED SELECTION</h2>
            <p className="text-[#FF7A00] text-xl">
              Answer Engine Optimization Case Studies
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
                    src='/aeoseo1.png'
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
          <div className="text-center mt-8">
          </div>
        </div>
      </section>

      {/* Global Reach / Cross-Industry Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Personalized Answer Engine Optimization Solutions for All Industries
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our AEO capabilities include featured snippet capture optimization,
            voice search query optimization, conversational AI content
            development, knowledge graph entity establishment, multi-platform
            answer engine tracking, and FAQ schema implementation. We serve
            startups, mid‑sized companies, and enterprise organizations.
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Cross‑industry experience strengthens our strategies. Healthcare AEO
            teaches us medical accuracy requirements; FinTech projects require
            compliance‑aware content; Legal services demand citation precision.
            This diverse exposure allows for more complex solutions.
          </p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Customer Testimonials
          </h2>
          <p className="text-center text-gray-400 mb-12">
            What Our Clients Say About TIS
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

      {/* Blog Insights Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">LATEST INSIGHTS</h2>
            <p className="text-[#438bff] text-lg">Blogs</p>
          </div>
          <Slider {...blogSettings}>
            {blogs.map((blog, idx) => (
              <div key={idx} className="px-2">
                <div className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all h-full flex flex-col">
                  <FiBookOpen className="text-4xl text-[#FF7A00] mb-4" />
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{blog.excerpt}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Informative Guide */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            INFORMATIVE GUIDE FOR ANSWER ENGINE OPTIMIZATION
          </h2>
          <p className="text-center text-gray-400 mb-12">
            All You Should Know About AEO
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                What exactly is Answer Engine Optimization?
              </h3>
              <p className="text-gray-400">
                AEO is the practice of optimizing content to be selected as the
                direct answer in AI‑generated responses, voice search, and
                featured snippets.
              </p>
            </div>
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How do I choose the right AEO agency?
              </h3>
              <p className="text-gray-400">
                Look for experience in structured data, conversational content,
                and a track record of securing AI citations across multiple
                platforms.
              </p>
            </div>
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How long does AEO take to show results?
              </h3>
              <p className="text-gray-400">
                Some improvements (like featured snippets) can appear in 1‑3
                months; building sustained AI authority typically takes 4‑6
                months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Know All About Answer Engine Optimization Services
          </p>
          <div className="space-y-6">
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                What is the difference between SEO and AEO?
              </h3>
              <p className="text-gray-400">
                SEO focuses on ranking in traditional search results; AEO
                focuses on being selected as the direct answer in AI‑generated
                responses, voice search, and featured snippets.
              </p>
            </div>
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How do you measure success in AEO campaigns?
              </h3>
              <p className="text-gray-400">
                We track featured snippet capture rates, AI citation appearances
                (ChatGPT, Gemini, etc.), voice search performance, and the
                quality of AI‑generated answers that include your brand.
              </p>
            </div>
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                Which AI platforms do you optimize for?
              </h3>
              <p className="text-gray-400">
                Google AI Overviews, Bing Chat, ChatGPT, Claude, Gemini,
                Perplexity, and voice assistants like Alexa and Siri.
              </p>
            </div>
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How often do AEO strategies need updating?
              </h3>
              <p className="text-gray-400">
                AI models evolve rapidly. We continuously monitor changes and
                refine strategies quarterly to maintain and improve visibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};