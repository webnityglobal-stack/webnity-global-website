
import React from 'react'

const PlansCard = ({ image, planType, features }) => {
  return (
    <div className="bg-[#050B18] border border-[#438bff] shadow-[#438bff] rounded-2xl md:p-6 p-4 shadow-lg overflow-hidden max-w-md mx-auto">
      {/* Header - SAME for all cards */}
      <div className="bg-red-700  text-white p-6 text-center rounded-2xl">
        <img src="/assets/amazon/amazonSpn.png" alt="no image" />
        <h2 className="text-2xl font-bold text-white">SOCIAL MEDIA MARKETING</h2>
        <p className="text-xl mt-2 text-white">{planType}</p>  {/* Brand/Standard/Premium yahan aayega */}
      </div>

      {/* What's Included */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">What's Included</h3>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index}>
              <p className="font-medium text-white">
                {feature.title}
              </p>
              <p className="text-sm text-gray-600 mt-1 text-white">{feature.description}</p>
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
// import React from 'react'

// const PlansCard = ({ image, mainHeading, heading, features  } ) => {
//   return (
//     <div className='p-4 bg-red-500 w-[360px] rounded-4xl'>
//       {/* image */}
//       <div className='w-80 h-48 overflow-hidden rounded-2xl'>
//         <img src={image} alt="image1" className='w-full h-full object-cover '/>
//       </div>
//     {/* main body */}
//       <div></div>
//       {/* button */}
//       <div></div>
//     </div>
//   )
// }

// export default PlansCard
