import Image from 'next/image'

type TechIcon = {
  href: string
  title: string
  src: string
  alt: string
}

type Props = {
  title: string
  techIcons: TechIcon[]
}

export const TechGallery: React.FC<Props> = ({ title, techIcons }) => {
  return (
    <div className="mb-1.5">
      {title} :
      <div className="flex flex-wrap max-w-md mt-1.5">
        {techIcons.map((tech: any) => (
          <a
            className="mr-2 mb-1.5"
            target="_blank"
            key={tech.title}
            href={tech.href}
            title={tech.title}
            rel="noopener noreferrer external"
          >
            <Image className="w-5 h-5" src={tech.src} alt={tech.alt} width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  )
}
