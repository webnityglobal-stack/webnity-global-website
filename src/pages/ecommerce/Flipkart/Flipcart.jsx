// Flipcart.jsx

import PlansCard from '@/components/cards/PlansCard';
import { flipkartSpn } from '@/constants/FlipcartSpn';
import React from 'react'

// ✅ Make sure you have a default export
const Flipcart = () => {
  return (
    <div className=''> 
      {/* Your component content */}
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