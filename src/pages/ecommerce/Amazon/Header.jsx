import React from 'react'

const Header = ({ handleAmazonSpn, handleAmazonGlobalSpn }) => {

  return (
    <div className='flex gap-8 flex-col items-center p-4 bg-[#050B18] justify-center'>
        <div className='text-white text-6xl shadow-lg shadow-[#438bff] p-4'>Amazon SPN Services</div>
       <div className='flex gap-4'>
         <button className="bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 p-2" onClick = {()=> handleAmazonSpn()}>
          Amazon SPN Service
        </button>
     
 <button className="bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 p-2" onClick = {()=> handleAmazonGlobalSpn()}>
          Amazon Global SPN Service
        </button>
       </div>
    </div>
  )
}

export default Header
