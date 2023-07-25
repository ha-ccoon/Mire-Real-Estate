import React from 'react'
import Link from 'next/link'

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

export default function Root() {
  return (
    <header className="text-white body-font shadow-md bg-custom">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/Logo.png"
            alt="logo"
            className="w-14 h-13 text-white  bg-yellow-300 rounded-full"
          />
          <Link href="/">
            <span className="ml-3 text-white text-2xl font-medium">
              미래 부동산
            </span>
          </Link>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/apartments"
            className="mr-[100px] ml-[150px] hover:text-gray-900"
          >
            아파트
          </Link>
          <Link href="/officetels" className="mr-[100px] hover:text-gray-900">
            오피스텔·원룸·투룸
          </Link>
          <Link href="/" className="mr-[100px] hover:text-gray-900">
            주택
          </Link>
          <Link href="/" className="mr-[100px] hover:text-gray-900">
            상가·점포
          </Link>
          <Link href="/" className="mr-[100px] hover:text-gray-900">
            공장·임야·토지
          </Link>
        </nav>
      </div>
    </header>
  )
}
