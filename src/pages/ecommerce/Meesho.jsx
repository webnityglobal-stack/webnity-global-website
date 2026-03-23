import PlansCard from '@/components/cards/PlansCard'
import { meeshoSpn } from '@/constants/MeeshoSpn'
import React from 'react'

const Meesho = () => {
  console.log("meesho compnent");
  return (
    <div className="bg-[#050B18] flex flex-col  justify-center">
     <div className='text-white  text-6xl shadow-lg shadow-[#438bff] p-4 text-center w-fit self-center  '>
       Meesho SPN Service
     </div>
     <div className='flex flex-col md:flex md:flex-row gap-6 p-8 justify-center  '>
       {
        meeshoSpn.map((plan)=>{
          return <div className=''>
             <PlansCard 
          key={plan.id}
          icon={plan.icon}
          planType={plan.planType}
          features={plan.features}
          />
          </div>
        })
      }
     </div>
    </div>
  )
}

export default Meesho
