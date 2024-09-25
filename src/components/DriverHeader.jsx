
import { FaUserCircle } from 'react-icons/fa'



export default function DriverHeader() {
    return (
        <div className='flex justify-between h-16 px-4 border-black shadow-2xl bg-sidebar'>
                <div className='relative flex items-center justify-center mx-60'>
                    <h2 className='font-mono text-4xl capitalize' > Driver Dashboard</h2>  
                </div>
                <div className='flex items-center gap-2 mr-2'>
                    <div className='relative flex mx-4 text-left'>
                        <button className='flex mr-4 items-center p-2 border-gray-600 text-lg space-x-4 font-mono font-bold text-black rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
                            <FaUserCircle className='mr-2 text-lg'/>
                        </button>
                        
                        <button className='flex items-center p-2w-full md:w-auto bg-green-500  justify-center  p-2 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90  hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
                            Logout
                        </button> 
                    </div>
                </div>
        
        </div>

    )
}