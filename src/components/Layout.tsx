import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  return (
    <>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link to="/" className="wordmark">Kristy Knowles</Link>
          <nav aria-label="Primary">
            <a href={location.pathname === '/' ? '#work' : '/#work'}>Work</a>
            <a href={location.pathname === '/' ? '#about' : '/#about'}>About</a>
            <a href={location.pathname === '/' ? '#projects' : '/#projects'}>Projects</a>
            <a href="/Kristy_Knowles_Womens_Sports_Resume_v2.docx">Résumé</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <strong>Kristy Knowles</strong>
            <p>Women’s Sports × Data × Technology</p>
          </div>
          <div className="footer-links">
            <a href="mailto:kristyk@gmail.com">Email</a>
            <a href="https://github.com/kr15tyk" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/krknowles/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}
