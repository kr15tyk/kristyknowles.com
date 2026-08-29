import Seo from '../components/Seo'
import WorkCard from '../components/WorkCard'

export default function Home() {
  return (
    <>
      <Seo
        title="Kristy Knowles — Women's Sports × Data × Technology"
        description="Kristy Knowles combines professional women's sports experience with data, research, technology, AI, and digital product development."
        path="/"
      />

      <section className="hero hero-v2">
        <div className="hero-playbook" aria-hidden="true">
          <svg viewBox="0 0 760 760" role="presentation">
            <circle cx="380" cy="380" r="285" />
            <circle cx="380" cy="380" r="178" />
            <path d="M95 574L241 448l98 52 114-201 108 57 104-170" />
            <path d="M121 233h128M513 536h131M173 646h94" />
            <circle className="play-dot one" cx="241" cy="448" r="9" />
            <circle className="play-dot two" cx="453" cy="299" r="9" />
            <circle className="play-dot three" cx="561" cy="356" r="9" />
          </svg>
        </div>

        <div className="shell hero-grid hero-grid-v2">
          <div className="hero-copy hero-copy-v2">
            <span className="eyebrow hero-kicker">Kristy Knowles · Women’s sports + data</span>
            <h1>I build the stories, stats, and products women’s sports deserves.</h1>
            <p className="hero-lede">
              Nine years inside the WTA. Two decades in technology. Now I bring both together for women’s professional baseball and soccer.
            </p>
            <div className="hero-focus">
              <span className="live-dot" aria-hidden="true" />
              <span>Current focus</span>
              <strong>Baseball + soccer</strong>
            </div>
            <div className="button-row">
              <a className="button primary" href="#work">Explore selected work <span aria-hidden="true">→</span></a>
              <a className="button secondary" href="/Kristy_Knowles_Resume.pdf" target="_blank" rel="noreferrer">Résumé PDF</a>
            </div>
          </div>

          <div className="portrait-data-stage">
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src="/kristy-portrait-vneck-v3.png"
                alt="Portrait of Kristy Knowles"
              />
            </div>

            <div className="data-card data-card-wta">
              <span className="data-card-label">Women’s pro sports</span>
              <strong>9+</strong>
              <small>years inside the WTA</small>
            </div>

            <div className="data-card data-card-tech">
              <span className="data-card-label">Technology</span>
              <strong>20+</strong>
              <small>years building systems</small>
            </div>

            <div className="data-card data-card-role">
              <div className="role-head">
                <span>PLAYER CARD / 01</span>
                <b>ACTIVE</b>
              </div>
              <dl>
                <div><dt>Role</dt><dd>Writer · Analyst · Builder</dd></div>
                <div><dt>League</dt><dd>Women’s professional sports</dd></div>
                <div><dt>Tools</dt><dd>Stories · Data · Products</dd></div>
              </dl>
            </div>
          </div>
        </div>

        <div className="shell hero-score-strip" aria-label="Career highlights">
          <div><span>01</span><strong>Editorial</strong><small>Reporting and features</small></div>
          <div><span>02</span><strong>Sports data</strong><small>Research and analysis</small></div>
          <div><span>03</span><strong>Digital products</strong><small>Tools built for fans</small></div>
          <p>THE DATA TELLS A STORY <b>↗</b></p>
        </div>
      </section>

      <section className="section" id="work">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">Selected Work</span>
            <h2>Three ways I work.</h2>
            <p>Writing, analysis, and product development—built around the same question: how do we make women’s sports easier to understand, follow, and remember?</p>
          </div>

          <div className="work-stack">
            <WorkCard
              number="01"
              label="Feature Writing"
              title="Denae Benites Found the Stage Baseball Had Denied Her"
              description="A deeply sourced player feature tracing Benites from years of finding her own places to play to hitting the first home run in WPBL history."
              href="/work/denae-benites"
              image="/work-images/denae-feature-broadcast-v3.png"
              note="Pre-publication editorial sample · Player factual review pending"
            />
            <WorkCard
              number="02"
              label="Data Analysis"
              title="What the WPBL’s First Month Can Tell Us — and What It Cannot"
              description="A transparent look at early leaderboards, opportunity, qualification thresholds, and the conclusions a small inaugural-season sample can—and cannot—support."
              href="/work/wpbl-first-month"
              image="/work-images/wpbl-analysis-broadcast-v3.png"
            />
            <WorkCard
              number="03"
              label="Data + Digital Product"
              title="The Inaugural 60"
              description="A structured, source-backed record of the players who opened the WPBL’s first season, combining player research, statistics, data pipelines, and individual player pages."
              href="/work/inaugural-60"
              image="/work-images/inaugural-60-data-system-v3.png"
              overlay="/work-images/inaugural-60-token-overlay-v3.svg"
            />
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="shell">
          <div className="section-heading compact">
            <span className="eyebrow">What I’m Building</span>
            <h2>Projects with a point of view.</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-card-head"><span>01 / BUILDING NOW</span><b>BASEBALL</b></div>
              <span className="eyebrow">Women’s Baseball Media + Data</span>
              <h3>She’s On First</h3>
              <p>An independent project documenting the people, data, and stories shaping a new era of women’s professional baseball.</p>
              <div className="project-links">
                <a className="text-link" href="https://shesonfirst.com" target="_blank" rel="noreferrer">Visit She’s On First →</a>
                <a className="social-link" href="https://www.instagram.com/sheson1st/" target="_blank" rel="noreferrer">Instagram @sheson1st</a>
              </div>
            </article>
            <article className="project-card">
              <div className="project-card-head"><span>02 / BUILDING NOW</span><b>SCORES</b></div>
              <span className="eyebrow">Women’s Sports Scores + Schedules</span>
              <h3>WoSoLive</h3>
              <p>A fan-facing scores and schedules product built around women’s sports rather than treating women’s competitions as an afterthought.</p>
              <div className="project-links">
                <a className="text-link" href="https://wosolive.com" target="_blank" rel="noreferrer">Visit WoSoLive →</a>
                <a className="social-link" href="https://www.instagram.com/wosolive/" target="_blank" rel="noreferrer">Instagram @wosolive</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div>
            <span className="eyebrow">The Through Line</span>
            <h2>The work has always been about information.</h2>
          </div>
          <div className="prose career-timeline">
            <article className="career-stop">
              <span className="career-marker">01</span>
              <div><span className="career-era">WTA · Women’s professional sports</span><p>My career started with the Women’s Tennis Association, where I spent more than nine years working in professional women’s sports. I traveled internationally with WTA staff and players, supporting tournaments and providing statistical information to the press corps before and during play.</p></div>
            </article>
            <article className="career-stop">
              <span className="career-marker">02</span>
              <div><span className="career-era">Technology · Research · Standards</span><p>Technology took me through network engineering, government infrastructure, cybersecurity, and technical research before becoming a Technical Leader at Cisco. There, I work across engineering, research, international standards, AI, and automation—and chair an international technical community of more than 100 participants.</p></div>
            </article>
            <article className="career-stop career-stop-now">
              <span className="career-marker">03</span>
              <div><span className="career-era">Now · The two halves come together</span><p>I’m building tools, data, and stories around women’s sports—particularly women’s professional baseball and soccer—and exploring what becomes possible when sports knowledge, rigorous research, and modern technology live in the same place.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="shell contact-block">
          <span className="eyebrow">Interested In</span>
          <h2>Editorial · Research · Sports Data · Digital Products · Women’s Pro Baseball + Soccer</h2>
          <p>I’m interested in conversations where those disciplines overlap.</p>
          <div className="button-row">
            <a className="button primary" href="mailto:kristyk@gmail.com">Email me</a>
            <a className="button secondary" href="https://www.linkedin.com/in/krknowles/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  )
}
