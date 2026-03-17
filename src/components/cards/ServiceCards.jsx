// src/components/sections/ServiceCards.jsx
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Code, 
  TrendingUp, 
  Search, 
  Users, 
  BarChart 
} from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: <ShoppingCart size={40} />,
      title: "Ecommerce Solutions",
      desc: "Build powerful online stores with seamless checkout experience",
      stats: [
        { label: "Projects", value: "150+" },
        { label: "Growth", value: "200%" }
      ],
      color: "bg-gradient-to-br from-[#0A66FF] to-[#0A66FF]/80",
      delay: 0
    },
    {
      icon: <Code size={40} />,
      title: "Web Development",
      desc: "Custom websites and web applications tailored to your needs",
      stats: [
        { label: "Websites", value: "200+" },
        { label: "Speed", value: "98%" }
      ],
      color: "bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/80",
      delay: 0.2
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Digital Marketing",
      desc: "Data-driven strategies to boost your online presence",
      stats: [
        { label: "ROI", value: "384%" },
        { label: "Leads", value: "10k+" }
      ],
      color: "bg-gradient-to-br from-[#0A66FF] to-[#0A66FF]/80",
      delay: 0.4
    },
    {
      icon: <Search size={40} />,
      title: "SEO Optimization",
      desc: "Rank higher on search engines and drive organic traffic",
      stats: [
        { label: "Keywords", value: "500+" },
        { label: "Traffic", value: "+150%" }
      ],
      color: "bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/80",
      delay: 0.6
    },
    {
      icon: <Users size={40} />,
      title: "Social Media",
      desc: "Engage your audience across all social platforms",
      stats: [
        { label: "Followers", value: "50k+" },
        { label: "Engagement", value: "12%" }
      ],
      color: "bg-gradient-to-br from-[#0A66FF] to-[#0A66FF]/80",
      delay: 0.8
    },
    {
      icon: <BarChart size={40} />,
      title: "Analytics & Reporting",
      desc: "Real-time insights and detailed performance reports",
      stats: [
        { label: "Metrics", value: "100+" },
        { label: "Accuracy", value: "99.9%" }
      ],
      color: "bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/80",
      delay: 1
    }
  ];

  return (
    <section className="bg-[#050B18] py-24 relative overflow-hidden">
      {/* Background 3D Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: "linear-gradient(to right, #0A66FF 1px, transparent 1px), linear-gradient(to bottom, #FF7A00 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#438bff]">Digital</span>{" "}
            <span className="text-[#FF7A00]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to transform your digital presence and drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: service.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group perspective-1000"
            >
              {/* 3D Shadow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A66FF]/20 to-[#FF7A00]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main Card */}
              <div className={`relative ${service.color} rounded-2xl p-8 text-white transform-gpu`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(0)"
                }}
              >
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                
                {/* Icon with 3D effect */}
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-white transform translate-z-10">
                    {service.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/80 mb-6">{service.desc}</p>

                {/* Stats with 3D bars */}
                <div className="space-y-4">
                  {service.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/70">{stat.label}</span>
                        <span className="font-bold">{stat.value}</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: i === 0 ? "75%" : "90%" }}
                          transition={{ duration: 1, delay: service.delay + 0.5 + i * 0.2 }}
                          className="h-full bg-white rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3D Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotateZ: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-3 -right-3 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {/* <span className="text-white text-xs font-bold">3D</span> */}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;