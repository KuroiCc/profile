import { env } from '../../env'
import data from '../data/works.json'

export const assetsSrcLoader = (src: string) => {
  // check if src is a relative path
  if (src.startsWith('/')) {
    return `${env.app.basePath}${src}`
  }
  return `${env.app.basePath}/${src}`
}

export const getWordCardDate = async () => {
  return Promise.all(
    data.map(async (item) => {
      const propsItem = {
        ...item,
        language: [],
      }
      if (!item.github) return propsItem

      const repo = item.github.split('/')
      const url = `https://api.github.com/repos/${repo[3]}/${repo[4]}/languages`
      const res = await fetch(url).then((res) => res.json())
      // 如果处理失败，返回原数据
      if (res?.message) return propsItem

      return {
        ...item,
        language: Object.keys(res),
      }
    }),
  )
}
