import ServiceCards from "../components/cards/Servicecards";
import FlipCard from "../components/cards/FlipCard";
import Counter from "../components/common/Country";
import { motion } from "framer-motion";
import TiltCard from "../components/cards/TiltCard";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#050B18] overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#438bff] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#FF7A00] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#438bff] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
        
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">The Digital</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[#438bff]">Future</span>{" "}
              <span className="text-white">Of Your</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[#FF7A00]">Business</span>
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg mt-6 max-w-lg mx-auto lg:mx-0">
              Digital Marketing Solution To Improve Your Business with 
              innovative strategies and cutting-edge technology.
            </p>


            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-12 justify-center lg:justify-start">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#438bff]">
                  <Counter  end={500} suffix="+"/>
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">Projects Done</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#FF7A00]">
                   <Counter  end={98} suffix="%"/>
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    <Counter  end={50} suffix="%"/>
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">Team Experts</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full max-w-lg mx-auto lg:mx-0"
        >
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-[#0A66FF]/5 border border-[#0A66FF]/20 backdrop-blur-lg rounded-2xl p-6">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600 text-sm ml-2">analytics.dashboard</span>
              </div>
              
              {/* Chart Bars */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[65, 45, 80, 55].map((height, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-[#438bff] to-[#FF7A00] rounded-t-lg transition-all duration-300 hover:from-[#FF7A00] hover:to-[#438bff]" 
                      style={{ height: `${height}px` }}
                    ></div>
                    <p className="text-xs text-gray-600 mt-2">Q{i+1}</p>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#050B18] border border-[#0A66FF]/20 rounded-lg p-3 sm:p-4">
                  <p className="text-gray-500 text-xs sm:text-sm">Traffic</p>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                     <Counter  end={24} suffix="k"/>
                  </h4>
                  <span className="text-[#438bff] text-xs sm:text-sm">↑ 
                     <Counter  end={12.5} suffix="%"/>
                  </span>
                </div>
                <div className="bg-[#050B18] border border-[#FF7A00]/20 rounded-lg p-3 sm:p-4">
                  <p className="text-gray-500 text-xs sm:text-sm">Sales</p>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                     <Counter  end={15} suffix="k"/>
                  </h4>
                  <span className="text-[#FF7A00] text-xs sm:text-sm">↑ 
                     <Counter  end={8} suffix="k"/>
                  </span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-[#050B18] border border-[#0A66FF]/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">Revenue</p>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">$
                       <Counter  end={84} suffix="k"/>
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-xs sm:text-sm">Growth</p>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#FF7A00]">+
                       <Counter  end={47} suffix="%"/>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 bg-[#438bff] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm sm:text-base">SEO</span>
            </div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 sm:w-16 sm:h-16 bg-[#FF7A00] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm sm:text-base">ADS</span>
            </div>
          </div>
        </motion.div>
      </div>

     {/* first card section */}


        <div className="flex  justify-between gap-8 p-8 ">

          {/* With all props */}
      <TiltCard 
        title="Ecommerce Solutions"
        desc="Build powerful online stores with seamless checkout"
        icon="🛒"
        stats={[
          { label: "Projects", value: "150+" },
          { label: "Growth", value: "200%" }
        ]}
        color="bg-gradient-to-br from-[#0A66FF] to-[#0A66FF]/80"
      />

      {/* With default stats */}
      <TiltCard 
        title="Web Development"
        desc="Custom websites and web applications"
        icon="💻"
        color="bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/80"
      />

      {/* Minimal usage - will use defaults */}
      <TiltCard 
        title="Digital Marketing"
        desc="Data-driven strategies for growth"
        icon="📈"
      />

      </div>


{/* second cardsection */}


      <ServiceCards/>
      <div>

 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            What we Provides: <span className="text-[#438bff]">Services</span>{" "}
            <span>&</span>{" "}
            <span className="text-[#FF7A00]">Technology</span>
          </h2>




          {/* {Third card section} */}

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-[#050B18]">
      {/* Service Card 1 */}
      <FlipCard 
        color="bg-gradient-to-br from-[#0A66FF] to-[#0A66FF]/80"
        front={
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-6xl mb-4">🛒</span>
            <h3 className="text-2xl font-bold text-center">Ecommerce Solutions</h3>
            <p className="text-center mt-2 text-white/80">Click to learn more</p>
          </div>
        }
        back={
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl font-bold text-center mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-[#FF7A00]">✓</span> Shopping Cart
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF7A00]">✓</span> Payment Gateway
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF7A00]">✓</span> Inventory Management
              </li>
            </ul>
          </div>
        }
      />
{/* Service Card 2 */}
      <FlipCard 
        color="bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/80"
        front={
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-6xl mb-4">💻</span>
            <h3 className="text-2xl font-bold text-center">Web Development</h3>
            <p className="text-center mt-2 text-white/80">Hover to flip</p>
          </div>
        }
        back={
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl font-bold text-center mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-[#0A66FF]">✓</span> React / Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0A66FF]">✓</span> Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0A66FF]">✓</span> MongoDB
              </li>
            </ul>
          </div>
        }
      />

      {/* Service Card 3 */}
      <FlipCard 
        color="bg-gradient-to-br from-[#0A66FF] to-[#0A66FF]/80"
        front={
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-6xl mb-4">📈</span>
            <h3 className="text-2xl font-bold text-center">Digital Marketing</h3>
            <div className="mt-4 text-center">
              <p className="text-2xl font-bold">+384%</p>
              <p className="text-sm text-white/80">Average ROI</p>
            </div>
          </div>
        }
        back={
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-2xl font-bold text-center mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-[#FF7A00]">✓</span> SEO Optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF7A00]">✓</span> Social Media Ads
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#FF7A00]">✓</span> Content Marketing
              </li>
            </ul>
          </div>
        }
      />

      </div>
      </div>
    </section>
  );
};

export default Hero;