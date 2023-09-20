// 'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/lette-a.png';

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'Portfolio',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full text-white py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img src={Logo} alt="" srcset="" className='w-11' />
            {/* <h3 className='font-bold text-2xl font-mono'>Ajinath Tangade</h3> */}
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-bold text-white-800 px-4 hover:text-white-900 hover:text-emerald-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-md border border-emerald-300 px-4 py-3 text-sm font-semibold text-emerald-300 hover:shadow-lg hover:shadow-cyan-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Resume
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img src={Logo} alt="" srcset="" className='w-11' />
                      {/* <h3 className='font-bold text-2xl font-mono'>Ajinath Tangade</h3> */}
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 mb-3">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-bold text-white-800 hover:text-white-900 hover:text-emerald-300"
                      >
                        <span className="text-base font-medium text-white-800">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="rounded-md border w-full border-emerald-300 px-4 py-3 text-sm font-semibold text-emerald-300 hover:shadow-lg hover:shadow-cyan-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
