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

export const icons = {
  AGUIcon: assetsSrcLoader(`${iconsPathPrefix}${iconsPaths.AGUIcon}`),
  MyjLabIcon: assetsSrcLoader(`${iconsPathPrefix}${iconsPaths.MyjLabIcon}`),
  SSIIcon: assetsSrcLoader(`${iconsPathPrefix}${iconsPaths.SSIIcon}`),
}
