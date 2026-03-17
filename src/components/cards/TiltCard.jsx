import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ 
  title = "Ecommerce Solutions", 
  desc = "Build powerful online stores with seamless checkout", 
  icon = "🛍️", 
  stats = [
    { label: "Projects", value: "150+" },
    { label: "Growth", value: "200%" }
  ], 
  color = "bg-gradient-to-br from-[#438bff] to-[#0A66FF]" 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="relative group w-full max-w-md mx-auto"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Card */}
      <div className={`${color} rounded-2xl p-8 shadow-2xl transform-gpu relative overflow-hidden min-h-[450px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px',
          opacity: 0.1
        }} />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* 3D Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon with background */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-4xl">{icon}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
          
          {/* Description with border */}
          <div className="border-l-4 border-white/30 pl-4 mb-6">
            <p className="text-white/90 text-lg">{desc}</p>
          </div>
          
          {/* Stats Grid - First row: two items */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-white/60 text-sm font-medium mb-1">{stat.label}</p>
                <p className="text-white font-bold text-3xl">{stat.value}</p>
                <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: i === 0 ? "75%" : "90%" }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Completion Rate - Second row: single item centered */}
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm mb-4">
            <div className="flex justify-between items-center">
              <p className="text-white/60 text-sm font-medium">Completion Rate</p>
              <p className="text-white font-bold text-2xl">98%</p>
            </div>
            <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-white rounded-full"
              />
            </div>
          </div>

          {/* Digital Marketing Section - Third row */}
          <div className="mt-auto">
            <div className="border-t border-white/20 pt-4">
              <h4 className="text-white font-semibold text-lg mb-1">Digital Marketing</h4>
              <p className="text-white/80 text-sm">Data-driven strategies for growth</p>
            </div>
          </div>
        </div>

        {/* 3D Depth Elements */}
        <div className="absolute -inset-1 bg-black/20 rounded-2xl transform -translate-z-[20px]" />
        <div className="absolute -inset-2 bg-black/10 rounded-2xl transform -translate-z-[40px]" />
      </div>
    </motion.div>
  );
};

export default TiltCard;