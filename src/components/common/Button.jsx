import { cn } from "../../lib/utils";

const Button = ({ children, className = "" }) => {
  return (
    <button className={cn(
      "border text-[#438bff] border-[#438bff] px-2 py-2 shadow-2xl shadow-[#438bff] hover:shadow-2xl hover:shadow-[#7b4009] rounded-lg hover:bg-[#FF7A00] hover:text-white transition",
      className
    )}>
      {children}
    </button>
  )
}

export default Button;