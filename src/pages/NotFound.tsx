import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="section">
      <div className="shell narrow">
        <span className="eyebrow">404</span>
        <h1>That page isn’t here.</h1>
        <p><Link className="text-link" to="/">Back to kristyknowles.com →</Link></p>
      </div>
    </section>
  )
}
