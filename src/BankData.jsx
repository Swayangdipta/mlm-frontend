import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import flag from './assets/usaFlag.png';
import { IoMdLogOut } from "react-icons/io";
import { getAuthFromSessionStorage, removeAuthFromSessionStorage } from './utils/ls.util';

const BankData = () => {
        const auth = getAuthFromSessionStorage()
        const navigate = useNavigate()
    
        const handleLogout = () => {
          // logout
          removeAuthFromSessionStorage()
      
          navigate('/login')
        }
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
            <Link to='/dashboard'><button className="font-semibold">Home</button></Link>
            <button className="font-semibold">Capital</button>
            <button className="font-semibold">Bot</button>
            <button className="font-semibold">Market</button>
            <Link to='/profile'><button className="font-semibold relative top-0 group">
              Profile  
            </button>
            </Link>
          </div>
        </nav>
      </div>

      <main className="pt-36 w-full min-h-screen bg-[url(https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?t=st=1739903983~exp=1739907583~hmac=7c62f98f4fad32fa1696a265bf44e49bb3cc727a7072f9024bb9d3088c27f209&w=1380)]">
        <div className='w-[90%] min-h-[400px] h-max p-4 mx-auto rounded border-amber-500 border bg-[#00000080] shadow-inner'>
        <h2 className='text-zinc-100'>My Team</h2>

        <table className="table-auto mt-4 w-full">
            <thead className='w-full bg-zinc-300 border'>
                <tr>
                    <th className='border border-zinc-400'>SL NO</th>
                    <th className='border border-zinc-400'>Action</th>
                    <th className='border border-zinc-400'>Login ID</th>
                    <th className='border border-zinc-400'>Mobile No.</th>
                    <th className='border border-zinc-400'>Wallet Address</th>
                </tr>
            </thead>
            <tbody className='bg-zinc-200 w-full text-center'>
            <tr className='border'>
                <td className='border border-zinc-400'>1</td>
                <td className='border border-zinc-400'><h4 className='px-1 py-1 rounded bg-amber-700 text-zinc-100 hover:text-zinc-300 cursor-pointer'>Update</h4></td>
                <td className='border border-zinc-400'>{auth.user.code || 'N/A'}</td>
                <td className='border border-zinc-400'>{auth.user.mobile}</td>
                <td className='border border-zinc-400'>-</td>
            </tr>
            </tbody>
        </table>
        </div>
      </main>

    </div>
  )
}

export default BankData