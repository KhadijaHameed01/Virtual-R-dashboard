import { videos } from "../assets/constant"


const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6 lg:mt-20">
     <h1 className="text-4xl lg:text-6xl sm:text-5xl font-bold tracking-wide">
        VirtualR build tools 
        <span className="ml-3 bg-gradient-to-r from-[#4e148c] to-[#613dc1] text-transparent bg-clip-text ">
        for developers
        </span>
     </h1>
     <p className="mt-10 text-lg text-center text-neutal-500 max-w-4xl ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus similique architecto nihil eveniet, ullam, quam nostrum blanditiis dolorem animi, mollitia eligendi earum velit sapiente soluta quibusdam ducimus accusantium dolor nisi!
      Earum facere id magni. Officiis voluptatum, excepturi aliquid nostrum cumque maxime enim sit, adipisci ab facilis quasi, quibusdam aperiam repudiandae? Unde aspernatur totam cupiditate, perferendis officiis tempora consectetur exercitationem. Vero.
     </p>
     <div className="flex justify-center my-10">
      <a href="#" className="py-3 px-4 mx-3 rounded-md bg-gradient-to-r from-[#4e148c] to-[#613dc1]">Start for free</a>
     <a href="#"  className="py-3 px-4 mx-3 rounded-md bg-gradient-to-r from-[#4e148c] to-[#613dc1]">Documentation</a>
     </div>
     <div className="flex">
    <video className="rounded-lg w-1/2 border border-[#4e148c] shadow-[#4e148c] mx-2 my-4">
    <source src={videos[0]} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    <video className="rounded-lg w-1/2 border border-[#4e148c] shadow-[#4e148c] mx-2 my-4">
    <source src={videos[2]} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
     </div>
    </div>
  )
}

export default HeroSection