// import PlansCard from '@/components/cards/PlansCard'
// import { amazonSpn } from '@/constants/AmazonSpn'

// import React, { useState } from 'react'
// import Header from './Header'
// import { amazonGlobalSpn } from '@/constants/AmazonGlobalSpn'

// const Amazon = () => {
//   const [clickAmazonSpnService,setClickAmazonSpnService] = useState(true)
//   const [clickAmazonGlobalSpnService,setClickAmazonGlobalSpnService] = useState(false);



//   const clickAmazonGlobalSpnServiceHandler = () => {
//     setClickAmazonGlobalSpnService(true);
//     console.log("global button clicked ")
//   }

//   const amazonSpnService = () => {
//     setClickAmazonSpnService(true);
//     console.log("amazon spn button clicked")
//      }

//   return (
//     <div className=''> 
//       <Header 
//         handleAmazonSpn={amazonSpnService}
//         handleAmazonGlobalSpn={clickAmazonGlobalSpnServiceHandler }
//       />


//      {/* amazon spn serivce  */}
//   {clickAmazonSpnService && (
//   <div className="grid bg-[#050B18] grid-cols-1 md:grid-cols-3 gap-6 p-20">
//     {amazonSpn.map((plan) => (
//       <PlansCard 
//         key={plan.id}
//         icon={plan.icon}
//         planType={plan.planType}
//         features={plan.features}
//       />
//     ))}
//   </div>
// )}

// {clickAmazonGlobalSpnService && (
//   <div className="grid bg-[#050B18] grid-cols-1 md:grid-cols-3 gap-6 p-20">
//     {amazonGlobalSpn.map((plan) => (
//       <PlansCard 
//         key={plan.id}
//         icon={plan.icon}
//         planType={plan.planType}
//         features={plan.features}
//       />
//     ))}
//   </div>
// )}

//     {/* amazon global spn service  */}



//     </div>
//   )
// }

// export default Amazon
import PlansCard from '@/components/cards/PlansCard'
import { amazonSpn } from '@/constants/AmazonSpn'
import React, { useState } from 'react'
import Header from './Header'
import { amazonGlobalSpn } from '@/constants/AmazonGlobalSpn'

const Amazon = () => {
  // ✅ Ek hi state - current active tab ka naam
  const [activeTab, setActiveTab] = useState('amazon'); // 'amazon' ya 'global'

  const handleAmazonSpn = () => {
    setActiveTab('amazon');
    console.log("amazon spn button clicked");
  }

  const handleAmazonGlobalSpn = () => {
    setActiveTab('global');
    console.log("global button clicked");
  }

  // Current data based on active tab
  const currentData = activeTab === 'amazon' ? amazonSpn : amazonGlobalSpn;

  return (
    <div className=''> 
    
      <Header 
        handleAmazonSpn={handleAmazonSpn}
        handleAmazonGlobalSpn={handleAmazonGlobalSpn}
      />

      <div className="grid bg-[#050B18] grid-cols-1 md:grid-cols-3 md:gap-6 gap-8 md:p-20 md:pt-10 p-6">
        {currentData.map((plan) => (
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

export default Amazon