"use client"
import Link from "next/link"
import { signup } from '@/app/api/auth'
import { useState } from 'react'

function Page() {
  const [password, setPassword] = useState('')
  const [showRequirements, setShowRequirements] = useState(false)
  const [serverError, setServerError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
  const passwordCriteria = {
    minLength: password.length >= 8,
    maxLength: password.length <= 64,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*]/.test(password),
  }

  const isValidPassword = Object.values(passwordCriteria).every(Boolean)

  const handleSubmit = async (formData: FormData) => {
    if (!isValidPassword) {
      setShowRequirements(true)
      return
    }

    try {
      await signup(formData)
      setShowRequirements(false)
      setServerError('')
      // Handle successful signup
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  const renderPasswordRequirements = () => {
    if (!showRequirements) return null;
    
    return (
      <div className="space-y-1 text-sm mt-2">
        {serverError && (
          <p className="text-red-500 font-medium mb-2">{serverError}</p>
        )}
        <p className={`${passwordCriteria.minLength ? 'text-green-500' : 'text-red-400'}`}>
          • At least 8 characters
        </p>
        <p className={`${passwordCriteria.maxLength ? 'text-green-500' : 'text-red-400'}`}>
          • Maximum 64 characters
        </p>
        <p className={`${passwordCriteria.hasUpperCase ? 'text-green-500' : 'text-red-400'}`}>
          • At least one uppercase letter
        </p>
        <p className={`${passwordCriteria.hasLowerCase ? 'text-green-500' : 'text-red-400'}`}>
          • At least one lowercase letter
        </p>
        <p className={`${passwordCriteria.hasNumber ? 'text-green-500' : 'text-red-400'}`}>
          • At least one number
        </p>
        <p className={`${passwordCriteria.hasSpecialChar ? 'text-green-500' : 'text-red-400'}`}>
          • At least one special character (!@#$%^&*)
        </p>
      </div>
    )
  }

  return (
    <div className='flex flex-row items-center justify-between min-h-screen'>
      <div className='bg-gray-100 min-h-screen w-full flex items-center justify-center'>
        <div className='w-full m-10 p-10 bg-white/50 backdrop-blur-2xl shadow-2xl rounded-2xl'>
          <form action={handleSubmit}>
            <h1 className='text-3xl font-semibold text-center'>Sign-in</h1>
            <div className='flex flex-col space-y-4 mt-10'>
              <input
                name="email"
                type="email"
                placeholder="Email"
                maxLength={254}
                className='p-2 rounded-full border border-gray-300'
              />
              <div className="space-y-2">
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    maxLength={64}
                    className='p-2 pr-10 rounded-full border border-gray-300 w-full'
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    value={password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setShowRequirements(!showRequirements)}
                  className="text-sm text-gray-600 hover:text-gray-800 underline-offset-2 hover:underline"
                >
                  {showRequirements ? 'Hide password requirements' : 'Show password requirements'}
                </button>
                {renderPasswordRequirements()}
              </div>
              <button 
                type="submit" 
                className='bg-blue-500 text-white p-2 rounded-full disabled:bg-gray-400 disabled:cursor-not-allowed'
                disabled={!isValidPassword}
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