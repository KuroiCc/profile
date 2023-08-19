import { existsSync } from 'fs'
import { resolve } from 'path'
import { assetsSrcLoader } from '../helpers'

const iconsPathPrefix = '/Icons'

const iconsPaths = {
  AGUIcon: '/AGUIcon.png',
  MyjLabIcon: '/MyjLabIcon.png',
  SSIIcon: '/SSIIcon.png',
}

for (const [key, value] of Object.entries(iconsPaths)) {
  const pathInPublic = resolve(`./public${iconsPathPrefix}${value}`)
  if (!existsSync(pathInPublic)) {
    throw new Error(`Image ${key} not found in ${pathInPublic}`)
  }
}

export const icons: typeof iconsPaths = Object.entries(iconsPaths).reduce((acc, [key, value]) => {
  acc[key] = assetsSrcLoader(iconsPathPrefix + value)
  return acc
}, {} as any)
