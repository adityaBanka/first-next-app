"use client"
import { useRouter } from 'next/navigation';
function SectionOne() {
    const router = useRouter();
    return (
        <div className='flex flex-col items-center justify-center h-screen w-full space-y-5'>

            <h1 className='text-5xl text-center lg:px-50  px-10'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-center lg:px-50  px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur amet blanditiis eum! Laboriosam veniam ipsum eveniet. Cum velit non consequatur saepe atque debitis officia error officiis iure eligendi delectus nobis quod tenetur sapiente, sit vel architecto. Blanditiis animi aperiam dolore laudantium asperiores deserunt esse at, similique, culpa consequatur officiis magni?</p>

            <div className='space-x-5'>
                <button
                    onClick={() => router.push('/sign-in')}
                    className='bg-white/50 p-5 rounded-full'
                >
                    Join Batch
                </button>
                <button
                    onClick={() => router.push('/sign-in')}
                    className='bg-white/50 p-5 rounded-full'
                >
                    Take Test
                </button>

            </div>
        </div>
    )
}

export default SectionOne