import Image from 'next/image'

import { TechGallery } from '.'
import aboutMe from '../../public/aboutMe.json'
import aboutMeOther from '../../public/aboutMeOther.json'
import { images } from '../assets'

export const ProfileDetail: React.FC = () => {
  const data = [
    ...aboutMe,
    {
      tech: (
        <div>
          {Object.entries(aboutMeOther.tech).map(([key, value]) => (
            <TechGallery key={key} title={key} techIcons={value} />
          ))}
        </div>
      ),
    },
    {
      'contact me': (
        <div className="flex flex-col">
          {aboutMeOther.emails.map((item) => (
            <a className="hover:underline" href={`mailto:${item}`} key={item.email}>
              {item.email} {item.memo && <span className="text-sm">({item.memo})</span>}
            </a>
          ))}
        </div>
      ),
    },
  ]

  return (
    <section className="text-zinc-100">
      <div className="flex mt-14">
        <h1 className="px-5 text-3xl w-fit bg-rose-600">More about Me</h1>
        <div className="border-[18px] border-t-transparent border-r-transparent border-rose-600 w-0"></div>
      </div>
      <div className="px-6 py-16">
        <table className="m-auto">
          <tbody>
            <tr className="border-b border-dashed">
              <td className="pb-4 pl-6" colSpan={2}>
                <Image className="w-20 h-20 rounded-full" src={images.selfIcon} alt="SelfIcon" width={80} height={80} />
              </td>
            </tr>
            {data.map((item) => {
              const [key, value] = Object.entries(item)[0]
              return (
                <tr className="border-b border-dashed" key={key}>
                  <td className="p-3 text-right capitalize align-top">{key}:</td>
                  <td className="p-3 pl-10">{value}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
