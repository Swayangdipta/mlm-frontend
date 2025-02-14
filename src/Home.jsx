import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';
import { MdPermIdentity } from "react-icons/md";
import { MdLogout } from "react-icons/md";

function Home() {
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  const handleSignUpButtonClick = () => {
    navigate("/signup");
  };
  
  const handleRegisterButtonClick = () => {
    navigate("/register");
  }

  const handleHomeButtonClick = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 px-8 bg-blue-800">
        <div className="logo-section">
          <h1 className='text-[24px]'>Company.in</h1>
          {/* <img src={logo} alt="logo" className="w-40 h-16 bg-slate-100 rounded-3xl" /> */}
        </div>


        {/* Navigation Menu */}
        <nav className={`menu-option flex flex-wrap space-x-2 sm:space-x-4 md:flex md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <button className="border-4 rounded-3xl h-10 sm:h-12 w-20 sm:w-24 md:w-28 lg:w-32 hover:scale-110 hover:shadow-lg transition-all duration-300" onClick={handleHomeButtonClick}>Home</button>
          <button className="border-4 rounded-3xl h-10 sm:h-12 w-20 sm:w-24 md:w-28 lg:w-32 hover:scale-110 hover:shadow-lg transition-all duration-300">Company</button>
          <button className="border-4 rounded-3xl h-10 sm:h-12 w-20 sm:w-24 md:w-28 lg:w-32 hover:scale-110 hover:shadow-lg transition-all duration-300">Features</button>
          <button className="border-4 rounded-3xl h-10 sm:h-12 w-20 sm:w-24 md:w-28 lg:w-32 hover:scale-110 hover:shadow-lg transition-all duration-300">Opportunities</button>
        </nav>

        {/* Sign In / Sign Up Buttons */}
        <div className="sign-buttons space-x-4 ml-4 flex items-center">
          <button className="px-3 py-2 h-10 sm:h-12 w-24 sm:w-32 md:w-40 text-base sm:text-lg font-semibold bg-orange-500 rounded-3xl hover:bg-orange-600 flex justify-center items-center" onClick={handleLoginButtonClick}>
            Sign In <MdPermIdentity className='ml-2 text-lg sm:text-2xl'/>
          </button>
          <button className="px-3 py-2 h-10 sm:h-12 w-24 sm:w-32 md:w-40 text-base sm:text-lg font-semibold bg-orange-500 rounded-3xl hover:bg-orange-600 flex justify-center items-center" onClick={handleSignUpButtonClick}>
            Sign Up <MdLogout className='ml-2 text-lg'/>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AI Powered Forex Trading</h1>
        <p className="text-lg md:text-xl mb-8">
          At International Holding, we're revolutionizing the Forex trading experience with
          cutting-edge Artificial Intelligence (AI) technology. Our mission is to empower
          traders with intelligent, automated trading solutions that drive success.
        </p>

        <div className="log-button space-x-4 flex flex-col md:flex-row items-start ml-10 justify-start w-full">
          <button className="px-6 py-3 bg-orange-500 h-12 w-24 sm:w-28 md:w-32 lg:w-36 rounded-3xl hover:bg-orange-600 flex justify-center items-center mb-4 md:mb-0 text-lg sm:text-base font-semibold" onClick={handleLoginButtonClick}>
            Login <span className="text-xl ml-2">+</span>
          </button>
          <button className="px-6 py-3 bg-orange-500 h-12 w-32 sm:w-36 md:w-40 lg:w-44 rounded-3xl hover:bg-orange-600 flex justify-center items-center text-lg sm:text-base font-semibold" onClick={handleRegisterButtonClick}>
            Register <span className="text-xl ml-2">+</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-left px-4 py-4 bg-blue-800 absolute bottom-0 left-0 w-full">
        <p>&copy; International Holding Company 2024-2025 | All rights reserved</p>
      </footer>
    </div>
  );
}

export default Home;
