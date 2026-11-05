import { useState } from "react"
import { Link } from "react-router-dom"
import grandatles from "../assets/image/grandatles.svg"

const links = [
  { to: "/", label: "Home" },
  { to: "/Units", label: "Units" },
  { to: "/Zones", label: "Zones" },
  { to: "/Developers", label: "Developers" },
  { to: "/Contactus", label: "Contact Us" },
]

const linkClass =
  "text-[#847D7D] text-lg lg:text-[20px] font-bold hover:text-[#8E1616] hover:underline"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center h-16 lg:h-26.25 px-4 sm:px-9 gap-4">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={grandatles} alt="grandatles" className="size-14 lg:size-29" />
        </Link>
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
          {links.map((l) => (
            <li key={l.to + l.label}>
              <Link to={l.to} className={linkClass}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="w-27.5 h-8.75 text-white text-base font-normal text-center rounded-sm bg-linear-to-r from-[#8E1616] to-[#C34B4B]">
            Register
          </button>

          <button
            className="lg:hidden p-2 text-[#8E1616]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <ul className="lg:hidden flex flex-col border-t border-gray-100 bg-white px-4 sm:px-9 py-2">
          {links.map((l) => (
            <li key={l.to + l.label} className="border-b border-gray-100 last:border-0">
              <Link to={l.to} onClick={() => setOpen(false)} className={`${linkClass} block py-3`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
