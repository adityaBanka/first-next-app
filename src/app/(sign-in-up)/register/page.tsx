import React from 'react'

function Page() {
  return (
    <div className='flex flex-row items-center justify-between min-h-screen min-w-screen'>
      <div className='bg-gray-100 min-h-screen w-full flex items-center justify-center'>
        <div className='bg-white/50 backdrop-blur-2xl shadow-2xl p-10 rounded-full'> This is a registration form</div>
      </div>



      <div className='bg-gray-800 h-screen w-full flex items-center'>
        <div className=' px-10 text-white space-y-1'>
          <h1 className='text-7xl font-semibold'>Register now!</h1>
          <p className='text-xl '>Join to start your journey.</p>
        </div>

      </div>
    </div>
  )
}

export default Page