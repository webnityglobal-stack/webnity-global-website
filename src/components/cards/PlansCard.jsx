
// import React from 'react'

// const PlansCard = ({ icon:Icon, planType, features }) => {
//     const isImageIcon = typeof Icon === 'string';
//   return (
//     <div className="bg-[#050B18] border border-[#438bff] shadow-[#438bff] rounded-2xl md:p-6 md:p-4 shadow-lg overflow-hidden max-w-md md:mx-auto">


// <div className="text-white p-6 text-center rounded-2xl flex flex-col items-center justify-center gap-4">
//  {/* <div className=''>
//    <Icon className="text-8xl" />
//  </div> */}
//   <div className=''>
//           {isImageIcon ? (
//             <img src={Icon} alt="Meesho" className="w-24 h-24 object-cover rounded-4xl" />
//           ) : (
//             <Icon className="text-8xl" />
//           )}
//         </div>
//   <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400  to-orange-500 bg-clip-text text-transparent animate-bounce">
//     {planType}
//   </p>
// </div>
//       {/* What's Included */}
//       <div className="p-6">
//         <h3 className="text-lg font-semibold mb-4 text-white">What's Included</h3>
//         <div className="space-y-4">
//   {features.map((feature, index) => (
//     <div key={index} className="flex gap-3 group">
//       <span className="text-blue-400 text-lg group-hover:translate-x-1 transition-transform">➤</span>
//       <div>
//         <p className="font-medium text-white">
//           {feature.title}
//           {feature.count && <span className="ml-2 text-blue-400 text-sm">({feature.count})</span>}
//         </p>
//         <p className="text-sm text-gray-300 mt-1">{feature.description}</p>
//       </div>
//     </div>
//   ))}
// </div>

//         <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
//           GET STARTED
//         </button>
//       </div>
//     </div>
//   )
// }

// export default PlansCard

import React from 'react'

const PlansCard = ({ icon: Icon, planType, features }) => {
  const isImageIcon = typeof Icon === 'string';

  return (
    <div className="bg-[#050B18] border border-[#438bff] shadow-[#438bff] rounded-2xl md:p-6 p-4 shadow-lg overflow-hidden max-w-md md:mx-auto 
    transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#438bff]">

      {/* TOP */}
      <div className="text-white p-6 text-center rounded-2xl flex flex-col items-center justify-center gap-4">

        {/* ICON */}
        <div className="transition-all duration-300 group-hover:scale-110 group">
          {isImageIcon ? (
            <img
              src={Icon}
              alt="icon"
              className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <Icon className="text-8xl transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>

        {/* PLAN NAME */}
        <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-bounce">
          {planType}
        </p>
      </div>

      {/* FEATURES */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">What's Included</h3>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3 group cursor-pointer">

              <span className="text-blue-400 text-lg transition-all duration-300 group-hover:translate-x-2">
                ➤
              </span>

              <div>
                <p className="font-medium text-white transition-colors duration-300 group-hover:text-[#438bff]">
                  {feature.title}
                  {feature.count && (
                    <span className="ml-2 text-blue-400 text-sm">
                      ({feature.count})
                    </span>
                  )}
                </p>

                <p className="text-sm text-gray-300 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold 
        transition-all duration-300 hover:bg-blue-700 hover:scale-[1.03] active:scale-95">
          GET STARTED
        </button>
      </div>
    </div>
  )
}

export default PlansCard