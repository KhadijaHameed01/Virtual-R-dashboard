import { Link } from "react-router-dom"
import { features } from "../assets/constant"


export const Features = () => {
  return (
    <Link to={'/features'}>
     <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] ">
     <div className="text-center">
     <span className="bg-neutral-900 text-shadow-[#4e148c] text-[#613dc1] px-2 rounded-full h-6 text-sm font-medium py-1 uppercase">
        Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
       Easily build 
       <span className="bg-gradient-to-r from-[#4e148c] to-[#613dc1] text-transparent bg-clip-text text-shadow-[#613dc1]">
       {} your code
       </span>
        </h2>
     </div>
     <div className="flex flex-wrap mt-10 lg:mt-20">
     {
        features.map((feature,index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-5">
                <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-[#613dc1] justify-center items-center rounded-full ">
                    {feature.icon}
                </div>
                <div>
                  <h5 className="ml-1 mb-6 text-xl"> 
                  {feature.text}
                  </h5>
                  <p className="text-md p-2 mb-20 text-neutral-400">{feature.description}</p>
                </div>
                </div>
            </div>
        ))
     }
     </div>
    </div>
    
    </Link>   
  )
}
