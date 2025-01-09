import { useState, useEffect } from "react";
import { NavaBarlogo } from "../assets/constant";
import { navItems } from "../assets/constant";
import { ChevronRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    setVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 py-3 transition-all duration-300 ${
        isScrolled ? "bg-neutral-900/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={NavaBarlogo} alt="Logo" />
            <span className="text-xl font-bold tracking-tight text-white">
              VirtualR
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-8 text-white">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-gray-400">
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="lg:flex ml-8 justify-center space-x-12 items-center hidden">
            <Link
              to="/signIn"
              className="py-2 px-3 border rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[white]"
            >
              Sign In
            </Link>
            <Link
              to="/create-account"
              className="bg-gradient-to-r from-[#4e148c] to-[#613dc1] py-2 px-2 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#4e148c]"
            >
              Create an Account
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div
          className={`fixed inset-0 bg-neutral-900/95 z-40 flex flex-col items-center justify-center space-y-8 ${visible ? "hidden" : ""}`}
          >
            <div
              className="container px-4 mx-auto text-2xl flex justify-center items-center text-[#613dc1] cursor-pointer"
              onClick={() => setMobileDrawerOpen(false)}
            >
              --<ChevronRight />Back
            </div>
            <ul className="space-y-6 text-white">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-lg hover:text-gray-400"
                    onClick={toggleNavbar}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-6 text-white">
              <Link
                to="/signIn"
                className="py-2 px-3 border rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[white]"
                onClick={toggleNavbar}
              >
                Sign In
              </Link>
              <Link
                to="/create-account"
                className="bg-gradient-to-r from-[#4e148c] to-[#613dc1] py-2 px-2 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-[#4e148c]"
                onClick={toggleNavbar}
              >
                Create an Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
