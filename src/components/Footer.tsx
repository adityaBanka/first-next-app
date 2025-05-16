import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import Image from "next/image"
import Logo_text from "@/assets/logo_text.svg"

function Footer() {
  return (
    <div className="min-h-32 h-fit bg-gray-800 space-y-10 p-10">

      <div className='flex justify-center space-x-15'>

        <div className='flex flex-col text-gray-300 space-y-1'>
          <p className='text-lg text-white pb-1 underline underline-offset-2'>S Banka</p>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Home</Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Quiz</Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Batches</Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Terms and Conditions</Link>
          <Link href="/" className="hover:text-white hover:underline underline-offset-2 w-fit">Privacy Policy</Link>
        </div>

        <Separator orientation="vertical" className='min-h-50 my-auto' />

        <div className='flex flex-col text-gray-300 space-y-1'>
          <p className='text-lg text-white pb-1 underline underline-offset-2'>Address</p>
          <p>Mr. Subhash Banka</p>
          <p>401a & 412, 4th Floor</p>
          <p>Verma Center, Boring Road Crossing</p>
          <p>Patna, Bihar, India</p>
          <p>Postal Code - 800001</p>

          <p className='text-lg text-white pb-1 mt-2 underline underline-offset-2'>Contact</p>
          <p>Phone Number: +91 - 9334200978</p>
          {/* <p>Alternate: +91 - 8294705101</p>
          <p>Email: subhashbanka@gmail.com</p> */}
        </div>

        <Separator orientation="vertical" className='min-h-50 my-auto' />

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2019.1750522992584!2d85.11758207045936!3d25.612863300941545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583b6b51a497%3A0xb85436170f2a7326!2sBanka%20Computer%20Education!5e0!3m2!1sen!2sin!4v1747428225007!5m2!1sen!2sin" width="500" height="300" loading="lazy"></iframe>

      </div>





      <Separator className='max-w-[80%] mx-auto mb-10' />

      <div className='flex items-center justify-center space-x-5'>

        <Link href="/" className="inline-block pointer-events-auto">
          <Image src={Logo_text} alt="logo" width={200} height={100} className="h-12" />
        </Link>

        <Separator orientation="vertical" className='min-h-12' />

        <div className='text-gray-300'>
          <p>© 2025 sbanka.in & it&apos;s properties. All rights reserved.</p>
          <Link href="https://www.adityabanka.com/" className='hover:underline hover:text-white underline-offset-1'>Developed and maintained by Aditya Banka.</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer