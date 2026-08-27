import { Link } from 'react-router-dom'

type Props = {
  label: string
  title: string
  description: string
  href: string
  image: string
  note?: string
}

export default function WorkCard({ label, title, description, href, image, note }: Props) {
  return (
    <article className="work-card">
      <Link to={href} className="work-image-link" aria-label={`View ${title}`}>
        <img className="work-image" src={image} alt="" />
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
