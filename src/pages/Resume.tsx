import Seo from '../components/Seo'

const resumePdf = '/Kristy_Knowles_Resume.pdf'

type RoleProps = {
  organization: string
  title: string
  dates: string
  context?: string
  bullets?: string[]
}

function Role({ organization, title, dates, context, bullets = [] }: RoleProps) {
  return (
    <section className="resume-role">
      <h3>
        <span>{organization}</span>
        <span className="resume-divider" aria-hidden="true">|</span>
        <span>{title}</span>
        <span className="resume-divider" aria-hidden="true">|</span>
        <span className="resume-dates">{dates}</span>
      </h3>
      {context && <p className="resume-context">{context}</p>}
      {bullets.length > 0 && (
        <ul>
          {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      )}
    </section>
  )
}

export default function Resume() {
  return (
    <>
      <Seo
        title="Résumé — Kristy Knowles"
        description="Kristy Knowles' experience across women's sports, data, research, technology, and technical leadership."
        path="/resume"
      />

      <section className="resume-hero">
        <div className="shell resume-hero-grid">
          <div>
            <span className="eyebrow">Résumé</span>
            <h1>Women’s pro sports, data, research & technology.</h1>
            <p>More than nine years inside the WTA and more than 20 years in technology, research, engineering, and technical leadership.</p>
          </div>
          <div className="resume-download-card">
            <p className="resume-download-label">One-page résumé</p>
            <a className="button primary" href={resumePdf} target="_blank" rel="noreferrer">Open PDF</a>
            <a className="button secondary" href="#resume-html">Read the HTML version</a>
            <p className="resume-open-note">The PDF opens in a new browser tab.</p>
          </div>
        </div>
      </section>

      <article className="resume-page shell" id="resume-html">
        <header className="resume-heading">
          <p className="resume-kicker">Women’s Sports <span>•</span> Content & Data <span>•</span> Research & Technology</p>
          <div className="resume-contact" aria-label="Contact information">
            <a href="tel:+19299004335">(929) 900-4335</a>
            <span>•</span>
            <a href="mailto:kristyk@gmail.com">kristyk@gmail.com</a>
            <span>•</span>
            <a href="https://kristyknowles.com">kristyknowles.com</a>
            <span>•</span>
            <a href="https://github.com/kr15tyk" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </header>

        <section className="resume-section">
          <h2>Profile</h2>
          <p><strong>Women’s sports, data, and technology professional with 9+ years inside the WTA and more than 20 years in technology, research, engineering, and technical leadership.</strong> Early career included traveling internationally with the WTA Tour and providing tournament statistics to the press corps. Today, a Technical Leader at Cisco and founder of She’s On First, an independent women’s baseball media and data project documenting the WPBL’s inaugural season. Current focus: women’s professional baseball and women’s professional soccer.</p>
        </section>

        <section className="resume-section">
          <h2>Women’s Sports & Selected Work</h2>
          <Role
            organization="She’s On First"
            title="Founder & Creator"
            dates="2026–Present"
            context="Women’s baseball media, research & data • shesonfirst.com"
            bullets={[
              'Built an independent women’s baseball platform documenting the WPBL’s inaugural season, founding player class, schedules, statistical leaders, player pages, and original features.',
              'Research and write deeply sourced player profiles using official records, independent reporting, statistical data, and a documented factual-review and image-rights workflow.',
              'Developed a WPBL data pipeline that derives schedules, player statistics, and leaderboards from official league data while exposing through-dates, methodology, and data-quality decisions.',
              'Produce original features and data analysis that connect player stories with on-field performance and make an emerging league easier for fans to follow.',
            ]}
          />
          <Role
            organization="Women’s Tennis Association (WTA)"
            title="Information Systems Coordinator"
            dates="9+ years"
            context="Professional women’s tennis • Greater Tampa Bay Area • International tournament travel"
            bullets={[
              'Traveled internationally with WTA staff and professional tennis players to tournaments around the world.',
              'Provided statistical information and tournament data to the press corps before and during tournament play, supporting timely media coverage of the WTA Tour.',
              'Supported information systems and data needs in a live professional sports environment where accuracy and speed directly affected media and event operations.',
            ]}
          />
          <Role
            organization="WoSoLive"
            title="Creator & Developer"
            dates="2025–Present"
            context="Women’s sports scores, schedules & data • wosolive.com"
            bullets={[
              'Built a fan-facing women’s sports product focused on making live scores, schedules, and competition information easier to discover and follow.',
              'Integrated sports APIs and developed workflows to identify, filter, normalize, and present women’s sports data across leagues and competitions.',
            ]}
          />
        </section>

        <section className="resume-section">
          <h2>Technology, Research & Leadership</h2>
          <Role
            organization="Cisco Systems"
            title="Security Research Engineering Technical Leader"
            dates="2017–Present"
            context="Remote"
            bullets={[
              'Lead complex research and analysis involving international cybersecurity standards, government requirements, product security, and emerging technologies across Cisco’s router portfolio.',
              'Translate dense technical requirements and large bodies of source material into accurate, usable documentation for engineers, laboratories, government stakeholders, and international technical communities.',
              'Chair the Network Device International Technical Community (ND iTC), coordinating more than 100 participants across vendors, government schemes, testing laboratories, consultants, and academia in multiple countries.',
              'Develop and apply AI-assisted workflows and tools for research, monitoring, analysis, technical writing, and assurance automation.',
              'Work across product engineering, independent laboratories, and government organizations to identify gaps, resolve issues, and drive certification outcomes.',
            ]}
          />
          <Role
            organization="Cisco Systems"
            title="Network Consulting Engineer / Test Engineer"
            dates="2014–2017"
            context="Research Triangle Park, NC"
            bullets={[
              'Designed and executed complex testing and proof-of-concept projects for government environments; analyzed results and produced technical reports, presentations, and implementation guidance.',
            ]}
          />
          <p className="resume-earlier"><strong>Earlier technology experience:</strong> Network Engineer — U.S. CENTCOM / SAIC • Network Administrator — ITT Exelis, Afghanistan • Network Engineer — AT&T</p>
        </section>

        <section className="resume-section resume-education">
          <h2>Education & Focus</h2>
          <p><strong>University of South Florida — B.A.</strong> <span>•</span> <strong>York University — A.A.</strong></p>
          <p>Women’s Pro Baseball • Women’s Pro Soccer • WPBL • Sports Data • Statistical Storytelling • Research & Analysis • Digital Products • AI-Assisted Research • Fact Verification • APIs • Technical Communication</p>
        </section>
      </article>
    </>
  )
}
