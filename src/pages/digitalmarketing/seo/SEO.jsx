import { useState } from "react";
import { AISEO } from "./AISeo";
import { GEO } from "./GEO";
import { AEO } from "./AEO";
import { LocalSEO } from "./LocalSeo";
import { EcommerceSEO } from "./EcommerceSeo";
import { ContentWriting } from "./ContentWriting";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SEO = () => {
  const [activeTab, setActiveTab] = useState("AISEO");

  const tabs = [
    { id: "AISEO", label: "AI SEO" },
    { id: "GEO", label: "GEO" },
    { id: "AEO", label: "AEO" },
    { id: "LocalSEO", label: "Local SEO" },
    { id: "EcommerceSEO", label: "Ecommerce SEO" },
    { id: "ContentWriting", label: "Content Writing" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "AISEO":
        return <AISEO />;
      case "GEO":
        return <GEO />;
      case "AEO":
        return <AEO />;
      case "LocalSEO":
        return <LocalSEO />;
      case "EcommerceSEO":
        return <EcommerceSEO />;
      case "ContentWriting":
        return <ContentWriting />;
      default:
        return <AISEO />;
    }
  };

  return (
    <div className="bg-[#050B18] min-h-screen">
      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-20 bg-[#050B18]/95 backdrop-blur-md border-b border-gray-800 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 md:gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#FF7A00] text-white shadow-lg"
                  : "bg-[#0a1222] text-gray-300 hover:bg-[#FF7A00]/20 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default SEO;