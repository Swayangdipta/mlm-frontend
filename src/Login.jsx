import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import { login, loginAdmin } from './helper/baseApiCalls';
import { getAuthFromSessionStorage, setAuthInSessionStorage } from './utils/ls.util';

function Login({isAdmin = false}) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const auth = getAuthFromSessionStorage()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(isAdmin){
        const response = await loginAdmin({username,password})
        
        if (response.status === 200) {
          setAuthInSessionStorage(response.data);
          navigate("/admin");
        }
      }else{
        const response = await login({username,password})
        
        if (response.status === 200) {
          setAuthInSessionStorage(response.data);
          navigate("/Dashboard");
        }
      }
    } catch (error) {
      console.log(error);
      
      return alert('Invalid ID or Password')
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  useEffect(() => {
    if(auth){
      navigate('/dashboard')
    }
  }, [])
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-[url(https://png.pngtree.com/background/20210717/original/pngtree-sci-fi-city-light-dot-luminous-building-street-purple-technology-background-picture-image_1446716.jpg)] pb-10 pt-12">
      <div className="bg-zinc-800 p-8 rounded-md shadow-md w-[28rem]">
        <div className="logo-section rounded-3xl flex justify-center">
        <h1 className='text-[24px] font-bold text-white'>Principal <span className="text-emerald-500">Grow</span></h1>
          {/* <img src={logo} alt="logo" className="w-40 h-20 bg-slate-100 rounded-3xl" /> */}
        </div>
        <br /><br />
        <h2 className="text-2xl font-strong mb-2 mt-0 text-center text-white">Sign In</h2>
        <p className='flex justify-center text-white'>Enter your Login ID and password to access account.</p>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4 pt-6">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter Username"
              required />
          </div>

          <div className="mb-6 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Password"
              required />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3"
            >
              {passwordVisible ? (
                <MdVisibilityOff className="text-xl" />
              ) : (
                <MdVisibility className="text-xl" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-52 h-12 bg-pink-600 text-white text-center py-2 rounded-e-3xl rounded-ss-3xl flex items-center justify-center mx-auto">
            <TbLogin2 className='mr-1'/> Login
          </button>

          <div className='flex justify-evenly pt-3'>
            <div className="mt-4 text-center text-emerald-400">
              <Link
                to="/register"
                className="hover:underline font-normal mr-20">
                Join Here
              </Link>
            </div>
            <div className="mt-4 text-center">
              <Link
                to="/forgot-pass"
                className="text-blue-500 hover:text-blue-700 hover:underline font-medium ml-20">
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
