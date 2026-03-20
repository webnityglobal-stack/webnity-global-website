import PlansCard from '@/components/cards/PlansCard'
import { amazonSpn } from '@/constants/SocailMedia'

import React from 'react'

const Amazon = () => {
  return (
    <div className='pt-10'> 
      <div className="grid bg-[#050B18] grid-cols-1 md:grid-cols-3 gap-6 p-20">
      {amazonSpn.map((plan) => (
        <PlansCard 
          key={plan.id}
          image={plan.image}           // har plan ka apna image
          planType={plan.planType}     // Brand/Standard/Premium
          features={plan.features}      // har plan ka apna data
        />
      ))}
    </div>
    </div>
  )
}

export default Amazon
