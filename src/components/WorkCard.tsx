import { Link } from 'react-router-dom'

type Props = {
  number: string
  label: string
  title: string
  description: string
  href: string
  image: string
  imageAlt: string
  overlay?: string
  note?: string
}

export default function WorkCard({ number, label, title, description, href, image, imageAlt, overlay, note }: Props) {
  return (
    <article className="work-card">
      <span className="work-number" aria-hidden="true">{number}</span>
      <Link to={href} className={`work-image-link${overlay ? ' work-image-composite' : ''}`} aria-label={`View ${title}`}>
        <img className="work-image" src={image} alt={imageAlt} />
        {overlay && <img className="work-image-overlay" src={overlay} alt="" aria-hidden="true" />}
      </Link>
      <div className="work-card-copy">
        <span className="eyebrow">{label}</span>
        <h3><Link to={href}>{title}</Link></h3>
        <p>{description}</p>
        {note && <p className="work-note">{note}</p>}
        <Link className="text-link" to={href}>View work →</Link>
      </div>
    </article>
  )
}
