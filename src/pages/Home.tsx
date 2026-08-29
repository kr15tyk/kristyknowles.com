import Seo from '../components/Seo'
import WorkCard from '../components/WorkCard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Seo
        title="Kristy Knowles — Women's Sports × Data × Technology"
        description="Kristy Knowles combines professional women's sports experience with data, research, technology, AI, and digital product development."
        path="/"
      />

      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <span className="eyebrow">Women’s Sports × Data × Technology</span>
            <h1>I build the story, interrogate the data, and make the product.</h1>
            <p className="hero-lede">
              I started my career inside professional women’s sports, traveling internationally with the WTA and providing tournament statistics to the media. After two decades in technology, research, engineering, and technical leadership, I’m bringing those worlds back together.
            </p>
            <div className="button-row">
              <a className="button primary" href="#work">See selected work</a>
              <Link className="button secondary" to="/resume">View résumé</Link>
            </div>
          </div>
          <div className="hero-side">
            <p className="hero-side-kicker">Current focus</p>
            <strong>Women’s baseball</strong>
            <p>Editorial · Research · Sports Data · Digital Products</p>
          </div>
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
              label="Feature Writing"
              title="Denae Benites Found the Stage Baseball Had Denied Her"
              description="A deeply sourced player feature tracing Benites from years of finding her own places to play to hitting the first home run in WPBL history."
              href="/work/denae-benites"
              image="/work-images/denae-placeholder.svg"
              note="Pre-publication editorial sample · Player factual review pending"
            />
            <WorkCard
              label="Data Analysis"
              title="What the WPBL’s First Month Can Tell Us — and What It Cannot"
              description="A transparent look at early leaderboards, opportunity, qualification thresholds, and the conclusions a small inaugural-season sample can—and cannot—support."
              href="/work/wpbl-first-month"
              image="/work-images/analysis-placeholder.svg"
            />
            <WorkCard
              label="Data + Digital Product"
              title="The Inaugural 60"
              description="A structured, source-backed record of the players who opened the WPBL’s first season, combining player research, statistics, data pipelines, and individual player pages."
              href="/work/inaugural-60"
              image="/work-images/sixty-placeholder.svg"
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
            <a className="project-card" href="https://shesonfirst.com" target="_blank" rel="noreferrer">
              <span className="eyebrow">Women’s Baseball Media + Data</span>
              <h3>She’s On First</h3>
              <p>An independent project documenting the people, data, and stories shaping a new era of women’s professional baseball.</p>
              <span className="text-link">Visit She’s On First →</span>
            </a>
            <a className="project-card" href="https://wosolive.com" target="_blank" rel="noreferrer">
              <span className="eyebrow">Women’s Sports Scores + Schedules</span>
              <h3>WoSoLive</h3>
              <p>A fan-facing scores and schedules product built around women’s sports rather than treating women’s competitions as an afterthought.</p>
              <span className="text-link">Visit WoSoLive →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div>
            <span className="eyebrow">The Through Line</span>
            <h2>The work has always been about information.</h2>
          </div>
          <div className="prose">
            <p>My career started with the Women’s Tennis Association, where I spent more than nine years working in professional women’s sports. I traveled internationally with WTA staff and players, supporting tournaments and providing statistical information to the press corps before and during play.</p>
            <p>Technology eventually took me in another direction. I moved through network engineering, government infrastructure, cybersecurity, and technical research before becoming a Technical Leader at Cisco.</p>
            <p>At Cisco, I work at the intersection of engineering, research, international standards, and increasingly AI and automation. I also chair an international technical community bringing together more than 100 participants from industry, government, laboratories, consultants, and academia.</p>
            <p>Now those two halves of my career are coming back together. I’m building tools, data, and stories around women’s sports—particularly women’s baseball—and exploring what becomes possible when sports knowledge, rigorous research, and modern technology live in the same place.</p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="shell contact-block">
          <span className="eyebrow">Interested In</span>
          <h2>Editorial · Research · Sports Data · Digital Products · Women’s Baseball</h2>
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
