import React from 'react'

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

export default function Root() {
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/Logo.png"
            alt="logo"
            className="w-14 h-13 text-white  bg-yellow-300 rounded-full"
          />
          <span className="ml-3 text-2xl font-medium">미래 부동산</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-12 hover:text-gray-900">아파트</a>
          <a className="mr-12 hover:text-gray-900">오피스텔</a>
          <a className="mr-12 hover:text-gray-900">원룸</a>
          <a className="mr-12 hover:text-gray-900">재개발/재건축</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
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
