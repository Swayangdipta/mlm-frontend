import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import flag from './assets/usaFlag.png';
import { IoMdLogOut } from "react-icons/io";
import { getAuthFromSessionStorage, removeAuthFromSessionStorage } from './utils/ls.util';
import { getTotalInvestment } from './helper/baseApiCalls';
import { toast } from 'react-toastify';

const CapitalPage = () => {
    const [totalInvestment, setTotalInvestment] = React.useState(0)
    const auth = getAuthFromSessionStorage()
    const navigate = useNavigate()

    const handleLogout = () => {
        // logout
        removeAuthFromSessionStorage()
    
        navigate('/login')
    }

    const fetchTotalInvestment = async () => {
        try {
            const response = await getTotalInvestment({user: auth.user.id})

            if (response.status === 200) {
                setTotalInvestment(response.data.total)
                return
            }
    
            toast("Error fetching capital")
        } catch (error) {
            toast("Error fetching capital")
            console.log(error);
        }
    }

    useEffect(() => {   
        if (!auth) {
            navigate('/login')
        }

        fetchTotalInvestment()
    }, [auth, navigate])
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
            <Link to="/invest" ><button className="font-semibold">Invest</button></Link>
            <Link to='/profile'><button className="font-semibold relative top-0 group">
              Profile  
            </button>
            </Link>
          </div>
        </nav>
      </div>

      <main className="pt-36 w-full min-h-screen bg-[url(https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?t=st=1739903983~exp=1739907583~hmac=7c62f98f4fad32fa1696a265bf44e49bb3cc727a7072f9024bb9d3088c27f209&w=1380)]">
            <div className='w-[300px] h-[150px] mx-auto rounded border-amber-500 border bg-[#00000080] shadow-inner flex  flex-col items-center justify-center gap-30 px-[40px]'>
                    <h1 className='text-white text-[20px]'>Total Investment</h1>
                    <h2 className='text-white text-[24px]'>${totalInvestment}</h2>
            </div>
      </main>
    </div>
  )
}

export default CapitalPage