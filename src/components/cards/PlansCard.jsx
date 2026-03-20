
import React from 'react'

const PlansCard = ({ icon:Icon, planType, features }) => {
  return (
    <div className="bg-[#050B18] border border-[#438bff] shadow-[#438bff] rounded-2xl md:p-6 md:p-4 shadow-lg overflow-hidden max-w-md md:mx-auto">


<div className="text-white p-6 text-center rounded-2xl flex flex-col items-center justify-center gap-4">
  <Icon className="text-8xl " />
  <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-bounce">
    {planType}
  </p>
</div>
      {/* What's Included */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">What's Included</h3>
        <div className="space-y-4">
  {features.map((feature, index) => (
    <div key={index} className="flex gap-3 group">
      <span className="text-blue-400 text-lg group-hover:translate-x-1 transition-transform">➤</span>
      <div>
        <p className="font-medium text-white">
          {feature.title}
          {feature.count && <span className="ml-2 text-blue-400 text-sm">({feature.count})</span>}
        </p>
        <p className="text-sm text-gray-300 mt-1">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
          GET STARTED
        </button>
      </div>
    </div>
  )
}

export default PlansCard