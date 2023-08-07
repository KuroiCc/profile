import { CodeAnimation, Profile, ProfileDetail, Works } from '../components'
import { getWordCardDate } from '../helpers'

export default async function Home() {
  const wordCardDate = await getWordCardDate()

  return (
    <main>
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
      <div className="m-auto">
        <Works wordCardDate={wordCardDate} />
      </div>
    </main>
  )
}
