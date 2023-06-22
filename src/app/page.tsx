import { Inter } from 'next/font/google'
import Image, { ImageLoader } from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <main className="flex flex-col items-center justify-between space-y-20 p-24">
      <h1 className="bg-teal-400">非常简单的测试页面</h1>
      <Image src={`${baseUrl}/vercel.svg`} alt="Vercel Logo" width={100} height={24} priority />
      <Image src={`${baseUrl}/next.svg`} alt="Next.js Logo" width={180} height={37} priority />
    </main>
  )
}
