import { CodeAnimation, Profile, ProfileDetail } from '../components'

export default function Home() {
  return (
    <main>
      <div className="h-72 flex justify-center">
        <span className="text-8xl text-white">
          楽したい！！！！！！！
        </span>
      </div>
      <div className="m-auto md:mb-10 md:w-5/6 max-w-7xl md:py-7">
        <CodeAnimation />
      </div>
      <div className="px-6 py-1 m-auto font-mono text-lg bg-rose-600 text-zinc-100">Oops! You found here!</div>
      <div className="m-auto">
        <Profile />
      </div>
      <div className="m-auto">
        <ProfileDetail />
      </div>
    </main>
  )
}
