import Seo from '../components/Seo'
import { Link } from 'react-router-dom'

export default function WorkInaugural60() {
  return (
    <>
      <Seo
        title="The Inaugural 60 — Data Product | Kristy Knowles"
        description="A source-backed record of the players who opened the WPBL's first season."
        path="/work/inaugural-60"
      />
      <article className="work-page">
        <header className="work-hero">
          <div className="shell narrow">
            <Link className="back-link" to="/#work">← Selected work</Link>
            <span className="eyebrow">Data + Digital Product</span>
            <h1>The Inaugural 60</h1>
            <p className="work-dek">A structured, source-backed record of the players reported across the four opening-day WPBL rosters—built to remain useful after opening day is long gone.</p>
          </div>
        </header>
        <div className="shell narrow">
          <div className="work-hero-composite" role="img" aria-label="A women’s baseball roster data system layered with exactly 60 baseball tokens representing the founding player class">
            <img className="work-hero-image" src="/work-images/inaugural-60-data-system-v3.png" alt="" />
            <img className="work-hero-overlay" src="/work-images/inaugural-60-token-overlay-v3.svg" alt="" />
          </div>
          <div className="work-details-grid">
            <div><span>Role</span><strong>Product · Research · Data · Development</strong></div>
            <div><span>Scope</span><strong>60-player inaugural cohort</strong></div>
            <div><span>Output</span><strong>Profiles · stats · source trails · player pages</strong></div>
          </div>
          <div className="prose work-prose">
            <h2>The problem</h2>
            <p>A new league creates history faster than the public record can organize it. Names, roster changes, positions, biographies, statistics, and sources can quickly become scattered across league pages, governing bodies, media stories, and social posts.</p>
            <h2>The product</h2>
            <p>The Inaugural 60 creates a durable starting record. Each player gets structured identity and career information, source status, season data, and an individual page that can evolve as the league grows.</p>
            <h2>The editorial rule</h2>
            <p>Uncertainty stays visible. A working cohort is labeled as working. Missing information remains missing until it can be supported. Corrections can be made without silently rewriting what the project originally recorded.</p>
          </div>
          <div className="button-row page-actions">
            <a className="button primary" href="https://shesonfirst.com/inaugural-60" target="_blank" rel="noreferrer">Explore The Inaugural 60</a>
          </div>
        </div>
      </article>
    </>
  )
}
