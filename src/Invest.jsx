import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import flag from './assets/usaFlag.png';
import { IoMdLogOut } from "react-icons/io";
import { getAuthFromSessionStorage, removeAuthFromSessionStorage } from './utils/ls.util';
import { toast } from 'react-toastify';
import { createInvestment } from './helper/baseApiCalls';

const Invest = () => {
    const [currentBalance, setCurrentBalance] = React.useState(0)
    const [amount, setAmount] = React.useState('10')
    const [userCode, setUserCode] = React.useState('')
    const auth = getAuthFromSessionStorage()
    const navigate = useNavigate()

    const handleLogout = () => {
      // logout
      removeAuthFromSessionStorage()
  
      navigate('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(amount > auth.user.wallet_balance) {
            toast('Insufficient funds')
            return
        }
        
        try {
            // make api call
            const response = await createInvestment({
                amount,
                user: userCode
            })

            if (response.status === 200) {
                toast('Investment successful')
                // after success update the wallet_balance from the auth object in session storage
                auth.user.wallet_balance -= amount
                sessionStorage.setItem('auth', JSON.stringify(auth))
                setCurrentBalance(auth.user.wallet_balance -= amount)
                return
            }

            toast(response.response.data.message)
        } catch (error) {
            toast('An error occurred. Please try again later.')
        }
    }

    useEffect(() => {   
        if (!auth) {
            navigate('/login')
        }

        setUserCode(auth.user.code)
        setCurrentBalance(auth.user.wallet_balance)
    }, [auth, navigate])
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar1 */}
      <div className="Navbar">
        <header className="bg-blue-500 flex justify-between items-center p-2 pb-3 fixed top-0 w-full z-10">
          <h1 className='text-[24px] text-white'>Principal Grow</h1>
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
            <Link to='/capital' ><button className="font-semibold">Capital</button></Link>
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
            <div className='w-[300px] min-h-[150px] h-max mx-auto rounded border-amber-500 border bg-[#00000080] shadow-inner flex  flex-col items-left justify-center gap-30 p-[20px]'>
                <h1 className='text-white text-[24px]'>Investment</h1>
                <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor="payment_method" className='text-white font-bold'>Wallet Balance:</label>
                        {/* User code */}
                        <input 
                            type="text" 
                            name="user_code" 
                            className='border-b-2 border-white indent-2 focus-visible:border-b focus-visible:border-emerald-500' 
                            placeholder='Enter user code'
                            value={'$'+currentBalance}
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="amount" className='text-white font-bold'>Investment Amount:</label>
                        {/* enum: ['10$', '20$', '30$', '50$', '100$', '200$', '300$', '500$', '1000$'] */}
                        <select value={amount} onChange={e => setAmount(e.target.value) } name="amount" id="amount" className='border-b-2 border-white indent-2 focus-visible:border-b focus-visible:border-emerald-500'>
                            <option value="10">10$</option>
                            <option value="20">20$</option>
                            <option value="30">30$</option>
                            <option value="50">50$</option>
                            <option value="100">100$</option>
                            <option value="200">200$</option>
                            <option value="300">300$</option>
                            <option value="500">500$</option>
                            <option value="1000">1000$</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor="payment_method" className='text-white font-bold'>User Code:</label>
                        {/* User code */}
                        <input 
                            type="text" 
                            name="user_code" 
                            className='border-b-2 border-white indent-2 focus-visible:border-b focus-visible:border-emerald-500' 
                            placeholder='Enter user code'
                            value={userCode}
                            onChange={(e) => setUserCode(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='bg-emerald-400 text-zinc-900 rounded-md p-2 px-6 mt-4'>Invest</button>
                </form>
            </div>
      </main>
    </div>
  )
}

export default Invest