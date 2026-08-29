import Seo from '../components/Seo'
import { Link } from 'react-router-dom'

export default function WorkAnalysis() {
  return (
    <>
      <Seo
        title="WPBL First-Month Data Analysis | Kristy Knowles"
        description="A transparent early-season WPBL analysis built from completed official box scores."
        path="/work/wpbl-first-month"
      />
      <article className="work-page">
        <header className="work-hero">
          <div className="shell narrow">
            <Link className="back-link" to="/#work">← Selected work</Link>
            <span className="eyebrow">Data Analysis</span>
            <h1>What the WPBL’s First Month Can Tell Us — and What It Cannot</h1>
            <p className="work-dek">Early leaderboards are noisy. This piece keeps the opportunity, sample size, and methodology visible so the numbers can be interesting without pretending they are settled truth.</p>
          </div>
        </header>
        <div className="shell narrow">
          <img className="work-hero-image" src="/work-images/wpbl-analysis-statboard.svg" alt="Animated WPBL analysis board with ranked rows, opportunity bars, qualification markers, and trend lines" />
          <div className="work-details-grid">
            <div><span>Role</span><strong>Data analysis · Writing · Visualization</strong></div>
            <div><span>Source</span><strong>Official WPBL statistics feed</strong></div>
            <div><span>Format</span><strong>Analysis + transparent methodology</strong></div>
          </div>
          <div className="prose work-prose">
            <h2>The question</h2>
            <p>What can we responsibly say about a new league after only a few weeks of games?</p>
            <h2>The approach</h2>
            <p>I used completed official box scores, removed duplicate and placeholder feed records, calculated player totals, applied qualification thresholds, and kept plate appearances and innings visible beside rate statistics.</p>
            <h2>The point</h2>
            <p>The analysis is designed to show both the signal and the uncertainty. That matters in an inaugural season, where every leaderboard is historically interesting but still built on a small sample.</p>
          </div>
          <div className="button-row page-actions">
            <a className="button primary" href="https://shesonfirst.com/analysis/wpbl-first-month" target="_blank" rel="noreferrer">View on She’s On First</a>
          </div>
        </div>
      </article>
    </>
  )
}
