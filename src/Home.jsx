import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from './assets/logo.png';
import { MdPermIdentity } from "react-icons/md";
import { MdLogout } from "react-icons/md";

function Home() {
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sciFiBg = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1600&h=900&fit=crop";
  const sciFiBg2 = "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1600&h=900&fit=crop";
  const sciFiBg3 = "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=1600&h=900&fit=crop";

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
    <div className="min-h-screen h-max bg-gradient-to-b from-blue-600 to-blue-900 text-white">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 px-8 bg-blue-800">
        <div className="logo-section">
        <h1 className='text-[24px] font-bold text-white'>Principal <span className="text-emerald-500">Grow</span></h1>

          {/* <img src={logo} alt="logo" className="w-40 h-16 bg-slate-100 rounded-3xl" /> */}
        </div>


        {/* Navigation Menu */}
        <nav className={`menu-option flex flex-wrap space-x-2 sm:space-x-4 md:flex md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#home">
            <button className="border-4 rounded-3xl h-10 sm:h-12 w-20 sm:w-24 md:w-28 lg:w-32 hover:scale-110 hover:shadow-lg transition-all duration-300"  >Home</button>
          </a>
          <a href="#company">
            <button className="border-4 rounded-3xl h-10 sm:h-12 w-20 sm:w-24 md:w-28 lg:w-32 hover:scale-110 hover:shadow-lg transition-all duration-300">Company</button>
          </a>
          <a href="#features">
            <button className="border-4 rounded-3xl h-10 sm:h-12 w-20 sm:w-24 md:w-28 lg:w-32 hover:scale-110 hover:shadow-lg transition-all duration-300">Features</button>
          </a>
          <a href="#opportunities">
            <button className="border-4 rounded-3xl h-10 sm:h-12 w-20 sm:w-24 md:w-28 lg:w-32 hover:scale-110 hover:shadow-lg transition-all duration-300">Opportunities</button>
          </a>
        </nav>

        {/* Sign In / Sign Up Buttons */}
        <div className="sign-buttons space-x-4 ml-4 flex items-center">
          <Link to="/login">
          <button className="px-3 py-2 h-10 sm:h-12 w-24 sm:w-32 md:w-40 text-[12px] sm:text-lg font-semibold bg-orange-500 rounded-3xl hover:bg-orange-600 flex justify-center items-center" onClick={handleLoginButtonClick}>
            Sign In <MdPermIdentity className='ml-2 text-lg sm:text-2xl'/>
          </button>
          </Link>
          <Link to="/register">
          <button className="px-3 py-2 h-10 sm:h-12 w-24 sm:w-32 md:w-40 text-[12px] sm:text-lg font-semibold bg-orange-500 rounded-3xl hover:bg-orange-600 flex justify-center items-center" onClick={handleSignUpButtonClick}>
            Sign Up <MdLogout className='ml-2 text-lg'/>
          </button>
          </Link>
        </div>
      </header>

      <section id='home'
      className="relative  h-screen flex flex-col items-center justify-center text-center py-16 px-4 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sciFiBg3})` }}
    >
      <div className='absolute top-0 left-0 w-full h-full bg-[#00000080] z-0'></div>
      <div className='absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center text-center'>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-600">AI Powered Forex Trading</h1>
      <p className="text-lg md:text-xl mb-8 max-w-3xl">
        At International Holding, we're revolutionizing the Forex trading experience with
        cutting-edge Artificial Intelligence (AI) technology. Our mission is to empower
        traders with intelligent, automated trading solutions that drive success.
      </p>
      <div className="log-button space-x-4 flex flex-row items-center justify-center w-full">
        <Link to="/login"><button
          className="px-6 py-3 bg-orange-500 h-12 w-24 sm:w-28 md:w-32 lg:w-36 rounded-3xl hover:bg-orange-600 flex justify-center items-center sm:mb-0 md:mb-0 text-lg sm:text-base font-semibold"
        >
          Login <span className="text-xl ml-2">+</span>
        </button></Link>
        <Link to="/register">
        <button
          className="px-6 py-3 bg-orange-500 h-12 w-32 sm:w-36 md:w-40 lg:w-44 rounded-3xl hover:bg-orange-600 flex justify-center items-center text-lg sm:text-base font-semibold"
        >
          Register <span className="text-xl ml-2">+</span>
        </button>
        </Link>
      </div>
      </div>
    </section>

      <section id='company'
      className="relative py-32 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sciFiBg})` }}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-60 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 uppercase">Project Overview</h2>
          </div>
          <p className="text-lg text-gray-300 font-medium mb-4">
            Principal Grow is all about modern digital technologies, Web3, and the latest applications,
            cultivating value exchange trends on a global scale.
          </p>
          <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mt-6">Strategic Vision</h3>
          <p className="text-gray-300">
            Our success is driven by precise calculation, predictive analytics, and strategic decision-making.
            Our analysts closely monitor market fluctuations to optimize trading outcomes.
          </p>
          <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mt-6">Forex Market Insights</h3>
          <p className="text-gray-300">
            The Forex market, with a daily turnover of around $7.5 trillion, attracts global traders.
            With the right strategies, any determined trader can achieve remarkable success.
            Forex trading involves purchasing one currency and selling it at the right time through brokers.
            New traders should seek guidance from experts.
          </p>
          <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mt-6">Company Origins</h3>
          <p className="text-gray-300">
            Founded in 2018 by a team of experienced traders, developers, and AI experts,
            Principal Grow emerged from a passion for innovation and a commitment to excellence.
            We strive to leverage AI to make Forex trading more accessible, efficient, and profitable.
          </p>
          <h3 className="text-xl md:text-2xl text-yellow-400 font-semibold mt-6">AI-Powered Governance</h3>
          <p className="text-gray-300">
            AI-powered Aiden Insight is guiding Principal Grow towards strategic growth and governance.
            Following the Q3 2024 board meeting, Aiden’s insights are shaping the company’s
            future with refined strategies and operational excellence.
          </p>
          <div className="text-center mt-6">
            <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
               href="/">
              Read More <span className="ml-2"><i className="fa-regular fa-plus"></i></span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      className="relative py-32 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sciFiBg2})` }}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto bg-black bg-opacity-60 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <span className="text-lg text-blue-400 font-semibold uppercase">Core Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 uppercase">Methodology</h2>
          </div>
          <div className="flex justify-between items-center mb-6">
            <button className="text-blue-400 hover:text-blue-500 text-2xl">&#8592;</button>
            <button className="text-blue-400 hover:text-blue-500 text-2xl">&#8594;</button>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md flex items-center">
              <span className="mr-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="15" y="25" fill="yellow" fontSize="24" fontWeight="bold">1</text>
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400">Integrity</h3>
                <p className="text-gray-300">We prioritize honesty and ethical conduct in all aspects of our business.</p>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md flex items-center">
              <span className="mr-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="15" y="25" fill="yellow" fontSize="24" fontWeight="bold">2</text>
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400">Shared Prosperity</h3>
                <p className="text-gray-300">Our success is shared equitably with our marketing partners, ensuring collective growth.</p>
              </div>
            </div>
            <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md flex items-center">
              <span className="mr-4">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="15" y="25" fill="yellow" fontSize="24" fontWeight="bold">3</text>
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400">Quality Excellence</h3>
                <p className="text-gray-300">Our unwavering commitment is to deliver the highest quality products and services.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
               href="/">
              Read More <span className="ml-2"><i className="fa-regular fa-plus"></i></span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id='features' className="relative py-32 text-white bg-black bg-opacity-80">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-5xl mx-auto bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <span className="text-lg text-blue-400 font-semibold uppercase">Core Development</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 uppercase">Our Features</h2>
          </div>
          <div className="space-y-8">
            {["Model Development", "Evaluation Metrics", "Result and Impact"].map((title, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md flex items-center">
                <span className="mr-4">
                  <img src={`/assets/img/process/icon-${index + 1}.svg`} alt="Feature Icon" className="w-12 h-12" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400">{title}</h3>
                  <p className="text-gray-300">
                    {index === 0 && "We design and implement machine learning models tailored to the Forex industry, supporting Meta Trader 5 for mobile & web."}
                    {index === 1 && "We define and track key performance metrics like accuracy, precision, recall, and AUC for effective AI trading solutions."}
                    {index === 2 && "Our AI-powered trades generate steady growth, ensuring stable and profitable investments with impressive results."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id='opportunities' className="tp-blog-area pt-32 pb-20 text-white bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-10">
          <span className="text-lg text-blue-400 font-semibold uppercase">Understanding Forex</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 uppercase">Forex Markets & Opportunity</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {["Vision", "Values", "Our Mission"].map((title, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={`https://source.unsplash.com/400x300/?finance,investment,forex-${index + 1}`} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h3>
              <p className="text-gray-300">
                {index === 0 && "It is our Vision to bring some order and respectability to this industry by sharing our experiences and knowledge to make a success of Forex Trading."}
                {index === 1 && "Principal Grow is committed to core values - Integrity, Customer Focused Culture, Trust, Respect and Care for the Individual, Passion for Excellence, Teamwork."}
                {index === 2 && "To provide innovative and responsive services for older people, which support Customer Focused Culture and help them have the best quality of life."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <footer className="tp-footer-area p-8 text-gray-400 text-center bg-gray-900 mt-1">
        <div className="container mx-auto px-6">
          <p>© Principal Grow 2024-25 | All Rights Reserved</p>
          <div className="mt-4">
            <a href="#" className="mr-4 hover:text-white">About us</a>
            <a href="#" className="mr-4 hover:text-white">Company</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
