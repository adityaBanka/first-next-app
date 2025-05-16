import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import Image from "next/image"
import Logo_text from "@/assets/logo_text.svg"

function Footer() {
  return (
    <div className="flex flex-col items-center min-h-32 h-fit bg-gray-800">

      <div className='flex items-start justify-center space-x-10 py-10'>

        <div className='flex flex-col text-gray-300 space-y-1'>
          <p className='text-lg text-white pb-1'>S Banka</p>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Home</Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Quiz</Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Batches</Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Terms and Conditions</Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Privacy Policy</Link>
        </div>

        <Separator orientation="vertical" className='min-h-32 mx-10 my-auto' />

        <div className='flex flex-col text-gray-300 space-y-1'>
          <p className='text-lg text-white pb-1'>Contact</p>
          <p>Primary: +91 - 9334200978</p>
          <p>Alternate: +91 - 8294705101</p>
          <p>Email: subhashbanka@gmail.com</p>
        </div>

        <Separator orientation="vertical" className='min-h-32 mx-10 my-auto' />

        <div className='flex flex-col text-gray-300 space-y-1'>
          <p className='text-lg text-white pb-1'>Address</p>
          <p>Mr. Subhash Banka</p>
          <p>401a & 412, 4th Floor</p>
          <p>Verma Center, Boring Road Crossing</p>
          <p>Patna, Bihar, India. 800-001</p>
        </div>
      </div>



      <Separator className='mb-10 max-w-[90%]' />



      <div className='mb-10 flex items-center justify-center space-x-10'>
        
        <Link href="/" className="inline-block pointer-events-auto">
          <Image src={Logo_text} alt="logo" width={200} height={100} className="h-12" />
        </Link>

        <Separator orientation="vertical" className='min-h-12 h-full' />

        <p className='text-gray-300'>© 2023 Subhash Banka. All rights reserved.</p>

      </div>

    </div>
  )
}

export default Footer