import { useState } from "react";



const NavApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <div className="sm:px-[11rem]">
      <nav className="py-5 px-5">
        <div className=" dark container mx-auto flex justify-between items-center relative drop-shadow-lg">
          <div className="text-black font-extrabold text-2xl bglime-300">
            Your Logo
          </div>

          <div className="hidden md:flex space-x-12">
            <a
              href="#"
              className="text-black hover:text-gray-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-300 transition duration-300"
            >
              About
            </a>
            <div className="relative group">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-gray-300 transition duration-300 focus:outline-none"
              >
                Services
              </button>
              {isMenuOpen && (
                <div className="absolute z-10 bg-white text-gray-800 p-4 space-y-2 transform -translate-x-1/2 -translate-y-2 opacity-100 scale-100 transition-all duration-300">
                  <a href="#" className="block">
                    Service 1
                  </a>
                  <a href="#" className="block">
                    Service 2
                  </a>
                  <a href="#" className="block">
                    Service 3
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-black hover:text-gray-300 transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div
                onClick={toggleAccountDropdown}
                className="w-8 cursor-pointer"
              >
                <img src='./user.png' alt="User" className="w-8 h-8" />
              </div>
              {isAccountDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-44 bg-white border border-gray-200 divide-y divide-gray-100 rounded shadow-lg transform transition duration-300 scale-100">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      src='../../../public/img/profile.png'
                      alt="Profile"
                      className="inline-block w-6 h-6 mr-2"
                    />
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                     <img
                      src='../../../public/img/setting.png'
                      alt="Profile"
                      className="inline-block w-6 h-6 mr-2"
                    />
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                     <img
                      src='../../../public/img/logout.png'
                      alt="Profile"
                      className="inline-block w-6 h-6 mr-2"
                    />
                    Logout
                  </a>
                </div>
              )}
            </div>

            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"  
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavApp;
