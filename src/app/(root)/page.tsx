"use client"

import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen space-x-10">
      <button
        onClick={() => router.push('/login')}
        className="p-5 bg-gray-300 rounded-4xl hover:bg-gray-400"
      >
        Login
      </button>

      <button
        onClick={() => router.push('/register')}
        className="p-5 bg-gray-300 rounded-4xl hover:bg-gray-400"
      >
        Register
      </button>
    </div>
  )
}

export default Page