import { useState } from 'react'

const links = [
  { href: '#hero', label: 'خانه' },
  { href: '#solution', label: 'محصول' },
  { href: '#features', label: 'ویژگی‌ها' },
  { href: '#guide', label: 'راهنمای اجرا' },
  { href: '#cert', label: 'گواهی‌نامه‌ها' },
  { href: '#gallery', label: 'نمونه‌کارها' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className="nav">
        <div className="nav__brand">
          <span className="nav__logo">رنگ زنگ</span>
        </div>

        <div className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="nav__cta">
            مشاوره رایگان
          </a>
        </div>

        <button
          className="nav__burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="منوی ناوبری"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`nav__mobile${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav__mobile-cta" onClick={close}>
          مشاوره رایگان
        </a>
      </div>
    </>
  )
}
