"use client"
import Link from "next/link"
import { signup } from '@/app/api/auth'
import { useState } from 'react'

function Page() {
  const [password, setPassword] = useState('')
  
  const passwordCriteria = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*]/.test(password),
  }

  const renderPasswordStrength = () => {
    if (!password) return null
    
    return (
      <div className="space-y-1 text-sm mt-2">
        <p className={`${passwordCriteria.minLength ? 'text-green-500' : 'text-gray-400'}`}>
          At least 8 characters
        </p>
        <p className={`${passwordCriteria.hasUpperCase ? 'text-green-500' : 'text-gray-400'}`}>
          At least one uppercase letter
        </p>
        <p className={`${passwordCriteria.hasLowerCase ? 'text-green-500' : 'text-gray-400'}`}>
          At least one lowercase letter
        </p>
        <p className={`${passwordCriteria.hasNumber ? 'text-green-500' : 'text-gray-400'}`}>
          At least one number
        </p>
        <p className={`${passwordCriteria.hasSpecialChar ? 'text-green-500' : 'text-gray-400'}`}>
          At least one special character (!@#$%^&*)
        </p>
      </div>
    )
  }

  return (
    <div className='flex flex-row items-center justify-between min-h-screen'>
      <div className='bg-gray-100 min-h-screen w-full flex items-center justify-center'>
        <div className='bg-white/50 backdrop-blur-2xl shadow-2xl p-10 rounded-2xl'>
          <form action={signup}>
            <h1 className='text-3xl font-semibold text-center'>Sign-in</h1>
            <div className='flex flex-col space-y-4 mt-10'>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className='p-2 rounded-full border border-gray-300'
              />
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className='p-2 rounded-full border border-gray-300 w-full'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {renderPasswordStrength()}
              </div>
              <button 
                type="submit" 
                className='bg-blue-500 text-white p-2 rounded-full'
                disabled={!Object.values(passwordCriteria).every(Boolean)}
              >
                Sign in
              </button>
            </div>
          </form>

          <div className='mt-4'>
            <p className="text-center">Forgot your password? <Link href="/reset-password" className="hover:underline underline-offset-3 text-cyan-600">Reset it here.</Link></p>
          </div>
        </div>
      </div>



      <div className='bg-gray-800 h-screen w-full flex items-center'>
        <div className=' px-10 text-white space-y-1'>
          <h1 className='text-7xl font-semibold'>Welcome back!</h1>
          <p className="text-xl">Don&apos;t have an account? <Link href="/sign-up" className="hover:underline underline-offset-3 text-cyan-400">Register here.</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Page