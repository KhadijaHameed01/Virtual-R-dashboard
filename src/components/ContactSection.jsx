

const ContactSection = () => {
  return (
    <section className="bg-[#0f0014] py-10 px-6 text-center">
      <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-5xl mb-3 lg:text-6xl text-center mt-6 tracking-wide">
            Made with authencity
            <span className="ml-3 bg-gradient-to-r from-[#4e148c] to-[#613dc1] text-transparent bg-clip-text">by me</span>
        </h2>
        <p className="text-lg text-neutral-400 mb-6">
          This website is a clone project created by me, showcasing my skills in modern web development. 
          If you are a busy mom or a passionate entrepreneur and need a custom website like this, I am here to help you bring your vision to life!
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="mailto:taibakausar469@gmail.com" 
            className="py-2 px-3 border rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[white]"
          >
            Hire Me
          </a>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-[#4e148c] to-[#613dc1] py-2 px-2 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#4e148c]"
            >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
