import { CheckCircle2 } from 'lucide-react'
import  {pricingOptions} from '../assets/constant'

const Pricing = () => {
  return (
    <div  className="mt-20">
    <h2 className="text-3xl mb-3 sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Pricing
        </h2>
        <div className="flex flex-wrap">
       {
         pricingOptions.map((item,index)=>(
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
         <div className='p-10 border border-neutral-700 rounded-xl'>
         <p className='text-4xl mb-8'>
            {item.name}
         {
            item.name===item.recommended &&(
                <span className="ml-3 bg-gradient-to-r from-[#4e148c] to-[#613dc1] text-transparent bg-clip-text">(Most popular)</span>
            )
         }
         </p>
         <p className='mb-8'>
        <span className='text-5xl mt-6 mr-2'>{item.price}</span>
        <span className='text-neutral-400tracking-light'>/Month</span>
         </p>
         <ul className=''>
          {
            item.features.map((feature,index)=>(
                <li key={index} className='mt-8 flex items-center'>
                    <CheckCircle2/>
                <span className='ml-2'>{feature}</span>
                </li>          
            ))
          }
         </ul>
         <a href="#" className=" inline-flex items-center justify-center text-center tracking-tight bg-gradient-to-r from-[#4e148c] to-[#613dc1] p-5 w-full h-12  mt-4 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#4e148c]" >Subscribe</a>
         </div>
            </div>
         ))
       }
        </div>
    </div>
  )
}

export default Pricing