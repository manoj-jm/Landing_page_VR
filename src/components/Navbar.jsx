import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <div className="text-xl tracking-wide">VirtualR</div>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-6">
              {navItems.map((item, index) => (
                <li key={index} className="inline-block">
                  <a href={item.href} className="hover:text-[#e6a467fa]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-4 items-center">
              <a href="#" className="px-3 py-2 border border-white rounded-lg">
                Sign In
              </a>
              <a
                href="#"
                className="px-3 py-2 border border-white rounded-lg bg-gradient-to-r from-amber-600 to-amber-700"
              >
                Create an Account
              </a>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed inset-0 z-20 bg-neutral-900 p-6 flex flex-col justify-center items-center lg:hidden">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-white text-lg hover:text-[#e6a467fa]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col space-y-4 mt-6">
                <a
                  href="#"
                  className="px-4 py-2 border border-white rounded-lg text-center"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 text-center"
                >
                  Create an Account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;