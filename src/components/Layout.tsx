import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Stars', to: '/stars' },
    { label: 'Shows', to: '/shows' },
    { label: 'About', to: '/about' },
    { label: 'Partner', to: '/partner' },
  ]

  return (
    <div className="page-shell">
      <ScrollToTop />
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Storylines home">
            <img src="/images/storylines-logo.png" alt="Storylines logo" className="brand-logo" />
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a href="/#apply" className="button primary compact-button">
            Apply to Perform
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-copy">
            <p>Four artists. One room. Different stories.</p>
          </div>
          <div className="footer-links">
            <Link to="/stars">Stars</Link>
            <Link to="/shows">Shows</Link>
            <Link to="/partner">Partner</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
