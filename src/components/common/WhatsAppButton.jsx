import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  return (
    <div className="flex justify-center leading-6 items-center md:fixed   text-center w-5 whitespace-normal md:bottom-10 md:right-16 hover:text-green-300 md:text-white  fixed bottom-10 text-white right-6">  
        <a
      href="https://wa.me/917303800109?text=Hi%20I%20want%20to%20know%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className=" fixed bottom-30 right-4  md:fixed md:bottom-28 md:right-12 z-50 bg-green-500 hover:bg-green-600 text-white md:p-4 rounded-full shadow-lg transition duration-300"
    >
      <FaWhatsapp className=" text-4xl md:text-2xl" />
    </a>
   chat with us
    </div>
    
  )
}

export default WhatsAppButton