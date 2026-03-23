import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FiStar,
  FiBookOpen,
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiMapPin,
  FiBarChart2,
  FiSearch,
  FiFileText,
  FiMonitor,
  FiGlobe,
} from "react-icons/fi";

export const LocalSEO = () => {
  // Benefit cards (from your example)
  const benefits = [
    {
      icon: <FiMapPin className="text-3xl text-[#FF7A00]" />,
      title: "Location-Specific Community Communication",
      desc: "Whether you operate across multiple cities or just one location, local SEO services are essential as it enables you to build a strong positive reputation with the community around your base location.",
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#FF7A00]" />,
      title: "Increased Organic Traffic",
      desc: "An increase in online visibility means it is easier for the prospects in the area to find out about your company or products/services with the help of local SEO services and thus boost website traffic.",
    },
    {
      icon: <FiTarget className="text-3xl text-[#FF7A00]" />,
      title: "Target Specific Areas or Regions",
      desc: "As a leading local SEO agency, we help you optimize your website and content based on content research and review regarding the area/region you operate in and wish to target.",
    },
    {
      icon: <FiBarChart2 className="text-3xl text-[#FF7A00]" />,
      title: "Boost Business Revenue",
      desc: "An increase in traffic means that your sales team has an easier job of leading visitors down the sales funnel and closing the deal. This helps in boosting revenue and business growth.",
    },
  ];

  // Services with detailed descriptions (from your example)
  const services = [
    {
      title: "Local Customer Analysis",
      desc: "As one of the best local SEO companies, we understand the importance of every customer acquisition. To help you cater to them in a better way, we do a detailed customer analysis by analyzing the market trends.",
    },
    {
      title: "Local Competitor Analysis",
      desc: "An analysis of close competitors who are outpacing your company in the online space. Our local SEO experts also analyze the market trends in your area to craft better local SEO packages in line with your business requirements.",
    },
    {
      title: "Keyword Research",
      desc: "Before we optimize your website content, we understand the respective industry vertical and market-related keywords. This allows us to incorporate business relevant keywords in the website content, so it shows up higher on search engine results.",
    },
    {
      title: "Persona Modeling",
      desc: "We build personas of your target audience and their interests, so we model our local SEO plan around the target audience. This drives organic traffic to the website and likely increases conversion rates.",
    },
    {
      title: "Content Optimization",
      desc: "A thorough review of the website content is always important and making the necessary changes in the website content at regular intervals is equally important. Basis our secondary research, we identify the business-relevant content and help you distribute the content through local SEO services.",
    },
    {
      title: "Content Marketing",
      desc: "Our experienced local SEO experts guide content writers to draft content for website blogs and guest blogs that is being used by the local SEO agency to generate the best results. All of which help boost traffic and increase brand recognition.",
    },
    {
      title: "Monitoring And Reporting",
      desc: "The local SEO services require constant monitoring of the performance and tweaking the plan based on the ever-changing search engine optimization, and search engine marketing.",
    },
    {
      title: "In-Depth Analytics",
      desc: "Our team delivers detailed analytics on the progress of your local SEO package services and the remaining aspects that are most relevant to it.",
    },
  ];

  // Case studies (custom for local SEO)
  const caseStudies = [
    {
      title: "Restaurant Chain Increases Footfall by 150%",
      desc: "How we optimized Google Business Profiles and local citations to drive more customers.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=Local+Case+1",
    },
    {
      title: "Dental Clinic Dominates Local Pack",
      desc: "Targeted local keywords and review management led to 300% more calls.",
      image: "https://placehold.co/600x400/0a1222/FF7A00?text=Local+Case+2",
    },
    {
      title: "Real Estate Agency Boosts Leads by 200%",
      desc: "Hyper-local content and neighborhood landing pages drove quality inquiries.",
      image: "https://placehold.co/600x400/0a1222/438bff?text=Local+Case+3",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Owner, The Pizza House",
      text: "TIS's local SEO services put us on the first page for 'pizza near me'. Sales skyrocketed!",
      rating: 5,
    },
    {
      name: "Priya Singh",
      role: "Marketing Head, City Dental",
      text: "Their local competitor analysis and citation building are unmatched. Highly recommended.",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      role: "Founder, Home Fixers",
      text: "We now dominate local search in our area. Professional and results-driven team.",
      rating: 5,
    },
  ];

  // Blog insights
  const blogs = [
    {
      title: "How to Optimize Your Google Business Profile for Local SEO",
      excerpt: "Complete guide to ranking higher in the local pack.",
      link: "#",
    },
    {
      title: "Local SEO Trends You Need to Know in 2025",
      excerpt: "Stay ahead with the latest local search strategies.",
      link: "#",
    },
    {
      title: "The Power of Local Citations for Small Businesses",
      excerpt: "Why consistent NAP data matters for local visibility.",
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
            Best And Affordable Local SEO Services{" "}
            <span className="text-[#FF7A00]">Company in India</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            Boost visibility and attract the right customers with targeted local
            SEO services offered by one of the best local SEO company in India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917303800109"
              className="border border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
            >
              Get Local SEO Quote
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0a1222]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              DELIVERING THE BEST LOCAL SEO SERVICES
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4">
              Hire A Reputed Local SEO Company To Help Your Business Grow With
              Powerful Local SEO Packages
            </p>
          </div>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12">
            If you have a business that is local or servicing specific areas,
            our well-crafted Local SEO packages help your website get the
            traffic it deserves. Using our local SEO services, your website
            shows up on Google local search listings on relevant search terms.
            This automatically generates more traffic for your website and
            attract potential customers from nearby areas or targeted areas.
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

      {/* Service Cards with Descriptions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            HELPING LOCAL BUSINESSES BENEFIT FROM LOCAL SEO SERVICES
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Delivering The Top-Class Local SEO Services that Include
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#0a1222] p-6 rounded-xl border border-gray-800 hover:border-[#FF7A00] transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold mb-2 text-[#FF7A00]">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
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
              Our Local SEO
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
                    src='/localseo1.webp'
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

      {/* Global Reach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            DELIVERING LOCAL SEO SERVICES ACROSS THE GLOBE
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            TIS has built its reputation on delivering results for top-notch
            clientele from all over the world. As the best local SEO company
            with decades of experience, we have the right set of Local SEO
            consultants to ensure that your brand message is heard, be it local
            or global.
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Our work represents our dedication to fulfilling our client's needs.
            This can be seen through the multiple local SEO campaigns that we
            have run for various sizes of organizations.
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

      {/* Blog Insights Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Blog Insights</h2>
            <p className="text-[#438bff] text-lg">
              Trends Which Matter In The Digital World
            </p>
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
            INFORMATIVE GUIDE FOR LOCAL SEO SERVICES
          </h2>
          <p className="text-center text-gray-400 mb-12">
            All You Should Know About Local SEO
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                What is Local SEO and why is it important for my business?
              </h3>
              <p className="text-gray-400">
                Local SEO helps your business appear in location-based searches,
                driving foot traffic and leads from customers in your area.
              </p>
            </div>
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How do I choose the right Local SEO agency?
              </h3>
              <p className="text-gray-400">
                Look for proven experience, client reviews, transparency in
                reporting, and a customized approach to your business needs.
              </p>
            </div>
            <div className="bg-[#050B18] p-6 rounded-lg border border-gray-800 hover:border-[#FF7A00] transition">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                What metrics should I track for Local SEO success?
              </h3>
              <p className="text-gray-400">
                Monitor local pack rankings, Google Business Profile insights,
                call and direction clicks, and organic traffic from local
                searches.
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
            Know All About Local SEO Services Offered By The Professional Agency
          </p>
          <div className="space-y-6">
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How long does Local SEO take to show results?
              </h3>
              <p className="text-gray-400">
                Typically 3-6 months, depending on competition and current
                visibility. Some improvements like citation building can show
                faster results.
              </p>
            </div>
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                Do Local SEO services for small businesses really deliver
                measurable results?
              </h3>
              <p className="text-gray-400">
                Absolutely. Small businesses see increased foot traffic, phone
                calls, and website visits when optimized correctly.
              </p>
            </div>
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                What strategies are involved in Local SEO services for small
                business growth?
              </h3>
              <p className="text-gray-400">
                Strategies include Google Business Profile optimization, local
                keyword targeting, citation building, review management, and
                locally-focused content creation.
              </p>
            </div>
            <div className="bg-[#0a1222] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-[#FF7A00]">
                How do Local SEO services help improve online reviews and local
                reputation?
              </h3>
              <p className="text-gray-400">
                We help manage review generation, respond to reviews, and
                highlight positive feedback, which builds trust and improves
                local rankings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};