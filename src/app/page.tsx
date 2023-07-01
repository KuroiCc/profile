import Image from 'next/image'

import { images, icons } from '../assets'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between space-y-20 p-24">
      <h1 className="bg-teal-400">非常简单的测试页面</h1>
      {Object.entries(images).map(([key, value]) => (
        <Image key={key} src={value} alt={key} width={100} height={24} />
      ))}
      {Object.entries(icons).map(([key, value]) => (
        <Image className="bg-teal-500" key={key} src={value} alt={key} width={24} height={24} />
      ))}
    </main>
  )
}
