import { testimonials } from "../assets/constant"


const Testmonials = () => {
  return (
    <div className="mt-20 tracking-wide">
    <h2 className="text-3xl mb-3 sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">What are people saying</h2>
    <div className="flex flex-wrap justify-center">
     {
        testimonials.map((testmonial,index)=>(
               <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
              <div className="bg-neutral rounded-md p-6 text-md border border-[#613dc1] font-thin ">
                   <p>{testmonial.text}</p>
                   <div className="flex mt-8 items-start">
                     <img  className='w-12 h-12 rounded-full border border-[#613dc1]' src={testmonial.photo} alt={testmonial.name} />
             <p className="flex flex-col">
              <h6 >
             {testmonial.name}
              </h6>
              <span className="text-sm font-normal italic text-neutral-500">
                {testmonial.company}
              </span>
             </p>
                   </div>
              </div>
               </div>
        ))
     }
    </div>
    </div>
  )
}

export default Testmonials
