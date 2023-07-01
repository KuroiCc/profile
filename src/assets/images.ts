import { existsSync } from 'fs'
import { resolve } from 'path'
import { assetsSrcLoader } from '../helpers'

const imagePathPrefix = '/Images'

const imagePaths = {
  selfIcon: '/SelfIcon.webp',
}

for (const [key, value] of Object.entries(imagePaths)) {
  const pathInPublic = resolve(`./public${imagePathPrefix}${value}`)
  if (!existsSync(pathInPublic)) {
    throw new Error(`Image ${key} not found in ${pathInPublic}`)
  }
}

export const images: typeof imagePaths = Object.entries(imagePaths).reduce((acc, [key, value]) => {
  acc[key] = assetsSrcLoader(imagePathPrefix + value)
  return acc
}, {} as any)
