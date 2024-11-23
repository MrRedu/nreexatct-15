"use client"

import { useState } from 'react'
import Link from 'next/link'

const paginas = [
  {
    href: "/",
    label: "Inicio"
  }, {
    href: "/formulario",
    label: "Formulario"
  }, {
    href: "/ssr",
    label: "SSR"
  },
  {
    href: "/expensive-component",
    label: "ExpensiveComponent"
  },
  {
    href: "/use",
    label: "Use <- React Hook"
  }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold">
            Mi Página
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${isOpen ? 'absolute top-full left-0 w-full' : 'hidden'
          } bg-slate-800 pb-4 transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-4">
          {
            paginas.map((pagina) => (
              <Link
                key={pagina.href}
                href={pagina.href}
                className="block py-2 text-lg font-semibold"
              >
                {pagina.label}
              </Link>
            ))
          }
        </div>
      </nav>
    </header>
  )
}

