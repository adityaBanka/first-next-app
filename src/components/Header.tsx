"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import Logo_text from "@/assets/logo_text.svg"

function Header() {
    const router = useRouter();

    return (
        <div className="fixed w-full h-fit p-3 flex items-center justify-between">

            <ProgressiveBlur
                className="h-32 w-full absolute top-0 left-0 -z-10"
                blurIntensity={2}
                blurLayers={4}
                direction="top"
            />

            <Link href="/" className="inline-block">
                <Image src={Logo_text} alt="logo" width={200} height={100} className="h-12" />
            </Link>

            <div className="flex items-center justify-center space-x-5">
                <button
                    onClick={() => router.push('/sign-up')}
                    className="p-3 bg-gray-300 rounded-xl hover:bg-gray-400"
                >
                    Sign Up/In
                </button>
            </div>
        </div>
    )
}

export default Header