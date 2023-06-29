import { env } from '../../env'

export const assetsSrcLoader = (src: string) => {
  // check if src is a relative path
  if (src.startsWith('/')) {
    return `${env.app.basePath}${src}`
  }
  return `${env.app.basePath}/${src}`
}
