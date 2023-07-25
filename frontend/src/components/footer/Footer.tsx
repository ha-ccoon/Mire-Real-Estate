import React from 'react'
import Link from 'next/link'
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

export default function Root() {
  return (
    <footer className="text-gray-600 body-font shadow-md border-t border-gray-200">
      <div className="container px-1 py-7 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <img src="/Footerminimap.png" alt="logo" className="w-[350px] h-auto" />
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/2 md:w-1/2 w-full px-7">
            <h1 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              상호: 미래 합동 공인중개사무소
            </h1>
            <p className="text-gray-500 text-sm">
              대표: 홍효자
              <br />
              사업자등록번호: 842-37-00109
              <br />
              주소: 부산광역시 부산진구 공원로 39 정문상가 105호
              <br />
              <br />
              Tel: 051-326-1404
            </p>
          </div>
        </div>
      </div>
      <Link href="/login">
        <button className="inline-flex items-center bg-yellow-400 border-0 ml-[200px] mb-4 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg font-bold mt-4 md:mt-0">
          관리자 로그인
        </button>
      </Link>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright © miraerealestate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
