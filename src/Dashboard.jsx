import React, { useEffect, useState } from 'react'
import flag from './assets/usaFlag.png';
import { IoMdLogOut } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { getAuthFromSessionStorage, removeAuthFromSessionStorage } from './utils/ls.util';
import { Link, useNavigate } from 'react-router-dom';
import WithdrawalPopup from './WithdrawalPopup';

function Dashboard() {
  const [currentUser,setCuerrentUser] = useState(null)
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false)
  const auth = getAuthFromSessionStorage()
  const navigate = useNavigate()

  const handleLogout = () => {
    // logout
    removeAuthFromSessionStorage()

    navigate('/login')
  }

  useEffect(() => {
    if(auth){
      setCuerrentUser(auth.user)
    }else{
      // redirect
      navigate('/login')
    }
  }, [])
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar1 */}
      <div className="Navbar">
        <header className="bg-blue-500 flex justify-between items-center p-2 pb-3 fixed top-0 w-full z-10">
          <h1 className='text-[24px] text-white'>Company.in</h1>
          <div className="flex space-x-6 mt-1">
            <img src={flag} alt="USA Flag" className="w-[2.6rem] h-[1.4rem]" />
            <button className="ml-10 text-2xl flex-col" onClick={handleLogout}>
              <IoMdLogOut />
            </button>
          </div>
        </header>
        {/* Navbar2 */}
        <nav className="bg-blue-900 text-white flex flex-col items-center p-3 m-0 fixed top-14 w-full z-10">
          <div className="flex space-x-4 w-full justify-between">
            <button className="font-semibold">Home</button>
            <button className="font-semibold">Capital</button>
            <button className="font-semibold">Bot</button>
            <button className="font-semibold">Market</button>
            <Link to='/profile'><button className="font-semibold relative top-0 group">
              Profile
            </button></Link>
          </div>
          <div className="dep-wid flex justify-between w-full mt-4 space-x-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full font-semibold">Deposit</button>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg w-full font-semibold" onClick={e => setIsWithdrawOpen(true)}>Withdrawal</button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-36 bg-[url(https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?t=st=1739903983~exp=1739907583~hmac=7c62f98f4fad32fa1696a265bf44e49bb3cc727a7072f9024bb9d3088c27f209&w=1380)]">
        {/* Referral Link */}
        <div className="p-4 rounded-lg">
          <p className="text-start font-medium text-white mt-4">Washington DC, USA (GMT-5)</p>
          <div className="relative w-full flex gap-4 items-center mt-2 justify-between bg-white rounded-lg p-2">
            <input
              className="border border-gray-300 px-2 py-1 flex-1 rounded-lg h-14 text-gray-600 pr-20"
              value={`${import.meta.env.VITE_FRONTEND_URL}/ih/register?sponsorId=${currentUser?.code}`}
              readOnly
            />
            <div className="flex gap-4 w-max h-full items-center"> 
              <FaRegCopy className=" text-gray-600 text-xl cursor-pointer" />
              <BsWhatsapp className=" text-gray-600 text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Space for news */}
        <div className="p-4 pt-0 rounded-lg">
          <div className="relative flex items-center mt-2">
            <input
              className="border border-gray-300 px-2 py-1 flex-1 rounded-lg h-14 text-gray-600 pr-20"
              value="News Section"
              readOnly
            />
          </div>
        </div>

        <div className="flex gap-4 p-4">
          {/* User Details Section - on the left side */}
          <div className="bg-white shadow-md p-4 rounded-lg flex-col items-center justify-between w-full md:w-1/3 h-[300px]">
            <div className='flex justify-between'>
              <CgProfile className='text-3xl ml-4'/>
              <div className='flex-col'>
                <p className="font-bold text-blue-600">USER ID</p>
                <p>{currentUser?.rank + '-' + currentUser?.code}</p>
              </div>
            </div>
            <div className='flex justify-between mt-4'>
              <h3 className="text-lg font-semibold text-gray-800 ml-4">{currentUser?.fullname || currentUser?.username}</h3>
              <p className="text-gray-500 mr-8">India</p>
            </div>
          </div>

          {/* Wallet Section */}
          <div className="flex flex-col gap-4 w-full md:w-2/3 pr-5 pl-3">
            {/* 1st row of wallet */}
            <h1 className='text-xl text-yellow-400 font-semibold'>Wallet Details</h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Fund Wallet</h3>
                <p className="text-2xl font-bold text-gray-800">${auth.user.wallet_balance}</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Bonus Wallet</h3>
                <p className="text-2xl font-bold text-gray-800">Coming Soon</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Trading Profit Wallet</h3>
                <p className="text-2xl font-bold text-gray-800">Coming Soon</p>
              </div>
            </section>
            {/* 2nd row of wallet */}
            <h1 className='text-xl text-yellow-400 font-semibold'>Team Details</h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">My Total Team</h3>
                <p className="text-2xl font-bold text-gray-800">91</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">My Active Team</h3>
                <p className="text-2xl font-bold text-gray-800">45</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">My Inactive Team</h3>
                <p className="text-2xl font-bold text-gray-800">46</p>
              </div>
            </section>
            {/* 3rd row of wallet */}
            {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">My Activation Amount</h3>
                <p className="text-2xl font-bold text-gray-800">$10</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">My Total Business</h3>
                <p className="text-2xl font-bold text-gray-800">$4990.0</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">My Total Referrals</h3>
                <p className="text-2xl font-bold text-gray-800">1</p>
              </div>
            </section> */}
            {/* 4th row of wallet */}
            {/* <h1 className='text-xl text-yellow-400 font-semibold'>Bonus Details</h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Referral Benefit</h3>
                <p className="text-2xl font-bold text-gray-800">$5.00</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Step Benefit</h3>
                <p className="text-2xl font-bold text-gray-800">$0.0</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Daily Reward</h3>
                <p className="text-2xl font-bold text-gray-800">$0.0</p>
              </div>
            </section>
            {/* 5th row of wallet */}
            {/* <h1 className='text-xl text-yellow-400 font-semibold'>Summary of Trading</h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Daily Assured Profit</h3>
                <p className="text-2xl font-bold text-gray-800">$0.00</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Life Time Reward</h3>
                <p className="text-2xl font-bold text-gray-800">$0.00</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Monthly Bonanza</h3>
                <p className="text-2xl font-bold text-gray-800">$0.00</p>
              </div>
            </section>
            {/* 6th row of wallet */}
            {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Total Withdrawl</h3>
                <p className="text-2xl font-bold text-gray-800">$0</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Total Bonus</h3>
                <p className="text-2xl font-bold text-gray-800">$0.00</p>
              </div>

              <div className="bg-white shadow-md p-5 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-600">Assured Profits</h3>
                <p className="text-2xl font-bold text-gray-800">$0.00</p>
              </div>
            </section> */}

          </div>
        </div>

            
      </main>
      {
        isWithdrawOpen && (<WithdrawalPopup setIsWithdrawOpen={setIsWithdrawOpen} />)
      }
    </div>
  )
}

export default Dashboard;
