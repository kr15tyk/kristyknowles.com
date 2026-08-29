import { useEffect } from 'react'

type Props = {
  title: string
  description: string
  path: string
  noindex?: boolean
}

export default function Seo({ title, description, path, noindex = false }: Props) {
  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.name = name
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', description)
    setMeta('robots', noindex ? 'noindex,nofollow' : 'index,follow')

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://kristyknowles.com${path}`

    const social = [
      ['og:title', title],
      ['og:description', description],
      ['og:url', canonical.href],
      ['og:type', 'website'],
      ['og:image', 'https://kristyknowles.com/hero-womens-sports-editorial.png'],
      ['twitter:card', 'summary_large_image'],
      ['twitter:image', 'https://kristyknowles.com/hero-womens-sports-editorial.png'],
    ]
    social.forEach(([property, content]) => {
      let el = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        if (property.startsWith('twitter:')) el.name = property
        else el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.content = content
    })
  }, [title, description, path, noindex])

  return null
}
