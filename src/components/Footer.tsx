import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import Image from "next/image"
import Logo_text from "@/assets/logo_text.svg"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/quiz", label: "Quiz" },
  { href: "/batches", label: "Batches" },
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
] as const

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-800 space-y-10 p-20">
      {/* Main Footer Content */}
      <div className='flex lg:flex-row flex-col justify-center space-x-15'>
        {/* Navigation Links */}
        <nav className='flex flex-col text-gray-300 space-y-1'>
          <h2 className='text-lg text-white pb-1 underline underline-offset-2'>sBanka.in</h2>
          {navigationLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-white hover:underline underline-offset-2 w-fit transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Separator orientation="vertical" className='min-h-50 my-auto not-lg:hidden' />

        {/* Contact Information */}
        <address className='flex flex-col text-gray-300 space-y-1 not-italic text-nowrap'>
          <h2 className='text-lg text-white pb-1 underline underline-offset-2'>Address</h2>
          <p>Banka Computer Education</p>
          <p>401a & 412, 4th Floor</p>
          <p>Verma Center, Boring Road Crossing</p>
          <p>Patna, Bihar, India</p>
          <p>Postal Code - 800001</p>

          <h2 className='text-lg text-white pb-1 mt-2 underline underline-offset-2'>Contact</h2>
          <p>Phone/WhatsApp: +91 - 9334200978</p>
        </address>

        <Separator orientation="vertical" className='min-h-50 my-auto not-lg:hidden' />

        {/* Location Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2019.1750522992584!2d85.11758207045936!3d25.612863300941545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583b6b51a497%3A0xb85436170f2a7326!2sBanka%20Computer%20Education!5e0!3m2!1sen!2sin!4v1747428225007!5m2!1sen!2sin"
          width="500"
          height="300"
          loading="lazy"
          title="Banka Computer Education Location"
          className='w-full rounded-lg border-none shadow-lg'
          aria-label="Location map of Banka Computer Education"
        />
      </div>

      <Separator className='max-w-[90%] mx-auto' />

      {/* Footer Bottom */}
      <div className='flex items-center justify-center space-x-5'>
        <Link href="/" className="shrink-0">
          <Image
            src={Logo_text}
            alt="sBanka.in Logo"
            width={200}
            height={100}
            className="h-12"
          />
        </Link>

        <Separator orientation="vertical" className='min-h-12' />

        <div className='text-gray-300'>
          <p>© {new Date().getFullYear()} sbanka.in & it&apos;s properties. All rights reserved.</p>
          <Link
            href="https://www.adityabanka.com/"
            className='hover:underline hover:text-white underline-offset-1 transition-colors duration-200'
          >
            Developed and maintained by Aditya Banka.
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer