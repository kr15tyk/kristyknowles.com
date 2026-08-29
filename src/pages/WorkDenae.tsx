import Seo from '../components/Seo'
import { Link } from 'react-router-dom'

export default function WorkDenae() {
  return (
    <>
      <Seo
        title="Denae Benites — Feature Writing | Kristy Knowles"
        description="Pre-publication editorial sample: a deeply sourced profile of WPBL catcher Denae Benites."
        path="/work/denae-benites"
        noindex
      />
      <article className="work-page">
        <header className="work-hero">
          <div className="shell narrow">
            <Link className="back-link" to="/#work">← Selected work</Link>
            <span className="eyebrow">Feature Writing</span>
            <h1>Denae Benites Found the Stage Baseball Had Denied Her</h1>
            <p className="work-dek">A sourced player feature connecting Benites’s path through Team USA, men’s recreational baseball, Banana Ball, and the WPBL to the first home run in league history.</p>
            <div className="status-pill">Pre-publication editorial sample · Player factual review pending</div>
          </div>
        </header>
        <div className="shell narrow">
          <img className="work-hero-image" src="/work-images/denae-feature-broadcast-v3.png" alt="Editorial collage of a women’s baseball player following through, surrounded by reporting notes, contact frames, and a ball-flight arc" />
          <div className="work-details-grid">
            <div><span>Role</span><strong>Writer · Researcher · Data integration</strong></div>
            <div><span>Publication</span><strong>She’s On First</strong></div>
            <div><span>Format</span><strong>Player feature + season stats</strong></div>
          </div>
          <div className="prose work-prose">
            <h2>What I wanted to do</h2>
            <p>Tell the story without turning a milestone into the entire story. The first WPBL home run is the hook; the more interesting subject is the years Benites spent finding competitive baseball wherever it existed.</p>
            <h2>How I built it</h2>
            <p>The draft uses official governing-body records, league material, independent reporting, and a dated statistical snapshot from official WPBL box scores. Claims carry a visible source trail, and uncertain or incomplete information stays marked as such.</p>
            <h2>Why it matters</h2>
            <p>Women’s baseball is creating a professional record in real time. Good coverage needs to do more than celebrate firsts—it needs to preserve context, verify the history, and follow what happens next.</p>
          </div>
          <div className="sample-note">
            <strong>Why the full feature is not public yet</strong>
            <p>The player has not yet completed factual review. The public She’s On First version remains unpublished until that review and image-rights work are complete.</p>
          </div>
        </div>
      </article>
    </>
  )
}
