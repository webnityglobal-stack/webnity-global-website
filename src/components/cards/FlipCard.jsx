// src/components/ui/FlipCard.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const FlipCard = ({ front, back, color = "bg-[#438bff]" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-80 w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ 
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        {/* Front */}
        <motion.div
          className={`absolute w-full h-full ${color} rounded-2xl p-6 text-white`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          {front}
        </motion.div>

        {/* Back */}
        <motion.div
          className={`absolute w-full h-full bg-[#050B18] border-2 ${color === "bg-[#438bff]" ? "border-[#438bff]" : "border-[#FF7A00]"} rounded-2xl p-6 text-white`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          {back}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipCard;