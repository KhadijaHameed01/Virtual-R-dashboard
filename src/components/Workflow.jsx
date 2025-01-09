import { CheckCircle2 } from "lucide-react"
import { checklistItems, workFlowPhoto } from "../assets/constant"


const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl mb-3 lg:text-6xl text-center mt-6 tracking-wide">
            Accelerate your
            <span className="ml-3 bg-gradient-to-r from-[#4e148c] to-[#613dc1] text-transparent bg-clip-text">coding workflow</span>
        </h2>
        <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 rounded-full sm:justify-center">
       <img src={workFlowPhoto} alt="" />
        </div>
        <div className="pt-12 w-1/2 lg:w-1/2">
            {
                checklistItems.map((item,index)=>(
                    <div key={index} className="flex mb-12">
                       <div className="text-green-400 rounded-full mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center">
                        <CheckCircle2/>
                       </div>
                       <div className="mb-1">
                        <h5 className="mt-1 mb-2 text-xl">
                       {item.title}
                        </h5>
                        <p className="text-md text-neutral-400">{item.description}</p>
                       </div>
                    </div>
                ))
            }
        </div>
        </div>
            </div>
  )
}

export default Workflow