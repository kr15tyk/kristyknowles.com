import { Link } from 'react-router-dom'
import WorkVisual, { type WorkVisualVariant } from './WorkVisual'

type Props = {
  number: string
  label: string
  title: string
  description: string
  href: string
  visual: WorkVisualVariant
  note?: string
}

export default function WorkCard({ number, label, title, description, href, visual, note }: Props) {
  return (
    <article className="work-card">
      <span className="work-number" aria-hidden="true">{number}</span>
      <Link to={href} className="work-visual-link" aria-label={`View ${title}`}>
        <WorkVisual variant={visual} compact />
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
