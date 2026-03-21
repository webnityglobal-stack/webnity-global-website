// Flipcart.jsx

import PlansCard from '@/components/cards/PlansCard';
import { flipkartSpn } from '@/constants/FlipcartSpn';
import React from 'react'

// ✅ Make sure you have a default export
const Flipcart = () => {
  return (
    <div className='bg-[#050B18] '> 
      {/* Your component content */}
    <div className='p-4 flex justify-center items-center'>
         <div className='text-white text-6xl bg-[#050B18] text-center shadow-lg shadow-[#438bff] p-4 inline-block'>Flipkart SPN Services</div>
    </div>
      <div className="grid bg-[#050B18] grid-cols-1 md:grid-cols-3 gap-6 md:p-20 p-8">
        {flipkartSpn.map((plan) => (
          <PlansCard
            key={plan.id}
            icon={plan.icon}
            planType={plan.planType}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  )
}

// ✅ Add this default export
export default Flipcart;