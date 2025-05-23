"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import Logo_text from "@/assets/logo_text.svg"

function Header() {
    const router = useRouter();

    return (
        <div className="fixed w-full h-fit z-100 p-3 flex items-center justify-between pointer-events-none">

            <ProgressiveBlur
                className="h-32 w-full absolute top-0 left-0 -z-10"
                blurIntensity={2}
                blurLayers={4}
                direction="top"
            />

            <Link href="/" className="inline-block pointer-events-auto">
                <Image src={Logo_text} alt="logo" width={200} height={100} className="h-12" />
            </Link>

            <div className="flex items-center justify-center space-x-5 pointer-events-auto">
                <button
                    onClick={() => router.push('/sign-in')}
                    className="p-3 bg-gray-300 rounded-xl hover:bg-gray-400"
                >
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default Header