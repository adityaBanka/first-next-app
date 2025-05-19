import Link from "next/link"
function Page() {
  return (
    <div className='flex flex-row items-center justify-between min-h-screen'>
     
      <div className='bg-gray-800 min-h-screen w-full flex items-center justify-end not-lg:hidden'>
        <div className='text-white text-end p-10'>
          <h1 className='text-7xl font-semibold'>Join now!</h1>
          <p className="text-xl">Already have an account? <Link href="/sign-in" className="hover:underline underline-offset-3 text-cyan-400">Login here.</Link></p>
        </div>
      </div>

      <div className='bg-gray-100 min-h-screen w-full flex items-center justify-center'>
        <div className='bg-white/50 backdrop-blur-2xl shadow-2xl p-10 rounded-full'> This is a registration form</div>
      </div>

    </div>
  )
}

export default Page