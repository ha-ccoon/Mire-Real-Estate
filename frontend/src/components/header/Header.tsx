'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

// TODO: 이후 해당 부분 url에 맞도록 변경해야함
// TODO: Dropdown 을위한 자료 구조로 변경
const menu = [
  {
    href: '/apartment',
    name: '아파트',
  },
  {
    href: '/officetel',
    name: '오피스텔',
  },
  {
    href: '/oneroom',
    name: '원룸',
  },
  {
    href: '/rebuilding',
    name: '재개발/재건축',
  },
]

export default function Root() {
  const pathName = usePathname()

  return (
    <header className="text-gray-600 shadow-md body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto cursor-pointer md:flex-row">
        <Link
          className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
          href={'/'}
        >
          <img
            src="/Logo.png"
            alt="logo"
            className="text-white bg-yellow-300 rounded-full w-14 h-13"
          />
          <span className="ml-3 text-2xl font-medium">미래 부동산</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          {/* TODO: 드롭다운 구조 적용 */}
          {menu.map((item) => (
            <Link
              className={`mr-12 hover:text-gray-900 ${
                pathName === item.href ? 'font-bold text-yellow-300' : ''
              }`}
              key={item.href}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
          기타
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
