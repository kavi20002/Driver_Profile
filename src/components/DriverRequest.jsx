
import DriverStatus from '../utils/DriverStatus'

const requestData = [
    {
        customerId: '123',
        customerName: 'dasun',
        contactNumber: '0713475038',
        address: 'kirimetimulla, thelijjawila',
       currentStatus: 'pending'
    },
    {
        customerId: '456',
        customerName: 'jinad',
        contactNumber: '0713475038',
        address: 'kirimetimulla, thelijjawila',
       currentStatus: 'pending'
    }
]

export default function DriverRequest() {
    return (
        <div className='w-full px-4 pt-3 pb-4 bg-white border border-gray-200 rounded-sm'>
            <strong className='text-xl font-medium text-green-600'>Driver Request</strong>

            <div className='mt-3'>
                <table className='w-full text-gray-700'>
                    <thead>
                        <tr>
                            <th>Customer Id</th>
                            <th>Customer Name</th>
                            <th>Contact Number</th>
                            <th>Request Adsress</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestData.map((request) => (
                            <tr className=' hover:bg-gray-100' key={request.customerId}>
                                <td>{request.customerId}</td>
                                <td>{request.customerName}</td>
                                <td>{request.contactNumber}</td>
                                <td>{request.address}</td>
                                <td>{DriverStatus(request.currentStatus)}</td>
                                <td className='flex flex-col gap-2'>
                                    <button className='px-4 py-2 mr-3 text-white bg-green-500 border-none rounded shadow-md outline-none select-none hover:bg-green-700'>
                                        Approve
                                    </button>
                                    <button className='px-4 py-2 mr-3 text-white bg-red-500 border-none rounded shadow-md outline-none select-none hover:bg-red-700'>
                                        Reject
                                    </button>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
                
            </div>

        </div>
    )
}