import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOPen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOPen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <div className="span text-xl tracking-light">VirtualR</div>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index} className="inline-block mx-4">
                  <a href={item.href} className="hover:text-[#e6a467fa]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
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
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOPen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOPen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center space-x-12 items-center">
                <a
                  href="#"
                  className="px-3 py-2 border border-white rounded-lg "
                >
                  Sign In
                </a>
                {/* removed boarder for below a , but it still showing an boarder-white ?  */}
                <a
                  href="#"
                  class="px-3 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700"
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
