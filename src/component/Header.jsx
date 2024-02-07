// 'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/lette-a.png';
import Githubb from '../assets/github.svg';
import Ista from '../assets/instagram.svg';
import Link from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

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

const imgBottom = [
  {
    id: 1,
    src: '/src/assets/github.svg',
    href: '#',
  },
  {
    id: 2,
    src: '/src/assets/instagram.svg',
    href: '#',
  },
  {
    id: 3,
    src: '/src/assets/linkedin.svg',
    href: '#',
  },
  {
    id: 4,
    src: '/src/assets/twitter.svg',
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
          <ul className="inline-flex space-x-8 relative">
            {menuItems.map((item) => (
              <li key={item.name} className="m-0">
                <a
                  href={item.href}
                  className="font-bold text-white-800 px-4 hover:text-white-900 hover:text-emerald-300 relative hover:after:content-[''] hover:after:absolute hover:after:border-emerald-300 hover:after:mt-3 hover:after:bottom-0 hover:after:left-0 hover:after:border hover:after:w-12"
                >
                  <span className=" ">{item.name}</span>
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

      <div className="hidden md:hidden lg:flex flex-col items-center space-y-6 bg-transparent px-20 pb-60 fixed bottom-0 before:bg-transparent before:w-[2px] before:h-[180px] before:absolute before:border before:border-[#233554] before:bottom-0">
        {imgBottom.map((itemm) => (
          <a
            key={itemm.id}
            href={itemm.href}
          >
            <img
              className="h-5 w-5 object-cover text-[#8892b0] bg-transparent"
              src={itemm.src}
              alt="User avatar"
            />
          </a>
        ))}
      </div>
      <div className="hidden lg:flex flex-col items-center space-y-[105px] fixed right-0 bottom-0 bg-transparent">
        <p className='rotate-90 bg-transparent'>ajinathtangade12@gmail.com</p>
      <p className='px-20 pb-48 bg-transparent before:w-[2px] before:h-[180px] before:absolute before:bg-transparent before:border before:border-[#233554] before:bottom-0 before:rotate-0'></p>
      </div>

    </div>
  )
}
