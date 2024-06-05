import React from 'react'

function InfoOne() {
  return (
    <div className='container mx-auto flex items-center py-16'>
        <div className="w-1/2">
            <img src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRlY2h8ZW58MHx8MHx8fDA%3D'
             alt='' className='w-full h-auto rounded'/>
        </div>
        <div className="w-1/2 px-6">
            <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
            <p className='text-gray-600 mt-4'>This landing page is basic page services with no database access. The develop time is approx. 30min and reconstruct time is approx 10min</p>
        </div>
    </div>
  )
}

export default InfoOne