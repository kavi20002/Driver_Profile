
import { Form } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function DriverProfile() {
    return (
        <div>
        <div className='flex items-center justify-center'>
            <div className='relative m-6 space-y-10 bg-white border border-black shadow-2xl rounded-2xl '>
                <h2 className="mt-4 mb-5 font-mono text-4xl font-bold text-center">
                    Driver Profile 
                </h2>
                <div className='flex'>
                    <div className='flex flex-col items-center border p-4 w-[50%]'>
                        <div className='mb-4'>
                            <FaUserCircle className='object-cover w-48 h-48 rounded-full'/>
                            
                        </div>
                        <h3 className="text-2xl font-semibold">
                            Kavidu Keshan
                        </h3>
                        <p className="text-sm text-gray-500"> Waste Truck Driver</p>
                        
                    </div >

                    <div className="flex items-center justify-center flex-1 border">
                        <Form action="" method="post" className="grid grid-cols-2 gap-4 p-6" >
                            <input type="text"
                            name='employeeid'
                            placeholder='Employee ID'
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />

                            <input type="password" name="password" id=""
                            placeholder='Password'
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />
                            
                            <input type="text"
                            name='name'
                            placeholder='Name'
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />
                            
                            <input type="email" name="email" 
                            id=""
                            placeholder='E-mail'
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />

                            <input type="text"
                            name='location'
                            placeholder='Location'
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />

                            <input type="text"
                            name='licenceid'
                            placeholder='Licence ID'
                            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light" />

                            <div className='col-span-2'>
                                <label htmlFor="avatar" className='block'>
                                Select Profile Picture (max 0.5mb)
                                </label>
                                <input type="file" name="avatra" id="" />
                                
                            </div>

                            <div  className="flex justify-end col-span-2">
                                <button 
                                type='submit'
                                className="px-4 py-2 text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                                
                            </div>

                            

                            
                        </Form>
                        
                    </div>
                    
                </div>
                
            </div>

        </div>
      
    </div>
    )
}