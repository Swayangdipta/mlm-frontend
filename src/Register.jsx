import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "./assets/logo.png";
import { getAuthFromSessionStorage } from "./utils/ls.util";
import { register } from "./helper/baseApiCalls";

function Register() {
  const navigate = useNavigate();
  const {sponsorId} = useParams()
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputs,setInputs] = useState({
    sponsor: sponsorId || null,
    fullname: '',
    username: '',
    country: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    email: '',
    otp: ''
  })

  const {sponsor, fullname, country, mobile, password, confirmPassword, email, username} = inputs;

  const auth = getAuthFromSessionStorage();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(password !== confirmPassword){
      alert('Password and Confirm Password do not match');
      return;
    }

    console.log(inputs);

        try {
          const response = await register({sponsor,fullname,username,country,mobile,email,password,rank: null})
          console.log(response);
          
          if (response.status === 200) {
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
          
          return alert('Faild to register')
        }
  };

    useEffect(() => {
      if(auth){
        navigate('/dashboard')
      }
    }, [auth])

  return (
    <div className="flex justify-center items-center min-h-screen overflow-y-auto bg-center bg-cover bg-no-repeat bg-[url(https://png.pngtree.com/background/20210717/original/pngtree-sci-fi-city-light-dot-luminous-building-street-purple-technology-background-picture-image_1446716.jpg)]">
      <div className="bg-zinc-800 pt-14 mt-12 mb-12 p-4 rounded-md shadow-lg w-full max-w-[28rem]">
        {/* Logo Section */}
        <div className="logo-section rounded-3xl flex justify-center mb-6">
          {/* <img
            src={logo}
            alt="logo"
            className="w-40 h-20 bg-slate-100 rounded-3xl"
          /> */}
          <h1 className='text-[24px] font-bold text-white'>Principal <span className="text-emerald-500">Grow</span></h1>
        </div>

        <h2 className="text-2xl font-bold mb-4  mt-10 text-center text-white">Sign Up</h2>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          {/* Sponsor Id */}
          <div className="mb-4">
            <input
              type="text"
              id="sponsor-id"
              name="sponsor"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl"
              placeholder="Sponsor ID *"
              value={sponsor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl"
              placeholder="Account Username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          {/* Applicant Name */}

          {/* <div className="mb-4">
            <input
              type="text"
              id="name"
              name="fullname"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl"
              placeholder="Applicant Name"
              value={fullname}
              onChange={handleChange}
              required
            />
          </div> */}

          {/* Email Address */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Country Selector */}
          <div className="mb-4">
            <select
              id="country"
              name="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl"
              required
              value={country}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Select Country
              </option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          {/* Mobile Number */}
          <div className="mb-4">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl"
              placeholder="Mobile"
              value={mobile}
              onChange={handleChange}
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4 relative">
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            <button type="button" className="absolute right-3 top-3"></button>
          </div>
          {/* Confirm Password */}
          <div className="mb-4 relative">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-3xl"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="button" className="absolute right-3 top-3"></button>
          </div>

          {/* OTP Section */}
          {/* <div className="mb-4">
            <div className="flex justify-between items-center">
              <input
                type="text"
                id="otp"
                name="otp"
                className="w-[15rem] px-4 py-2 border border-gray-300 rounded-3xl"
                placeholder="Enter OTP"
                required
              />
              <button
                type="button"
                className="ml-3 bg-blue-500 w-24 mr-10 h-9 rounded text-white font-medium"
              >
                Send OTP
              </button>
            </div>
          </div> */}
          {/* Checkbox for Terms & Conditions */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="terms"
              className="h-8 w-8 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
              onChange={() => setIsDisabled(!isDisabled)}
            />
            <label htmlFor="terms" className="ml-2 text-base text-gray-400">
              By clicking the button you have confirmed accept the International
              Holdding Terms & Conditions and Privacy Policy
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isDisabled}
            className="w-28 bg-orange-700 text-white py-2 rounded-md transition duration-200"
          >
            Submit
          </button>

          {/*Login Link*/}
          <div className="flex justify-center mt-4 text-sky-500">
            <a href="/login">
              Login Here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
