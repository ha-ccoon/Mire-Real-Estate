'use client'

import type { NextPage } from 'next'
import Link from 'next/link'
// import KakaoMap from '@/components/main/KakaoMap'
import { useState } from 'react'
const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // 검색 로직을 추가하세요.
  }
  return (
    <>
      <div className="flex justify-center items-center h-[493.26px] bg-gray-200 shadow">
        <img
          className="w-[1920px] h-[493.26px] object-cover"
          src="./mainTop.png"
          alt="Main Image"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center mb-6">
            <span className="text-gray-500 text-3xl">
              어떤 매물을 찾고 계신가요?
            </span>
          </div>
          <form onSubmit={handleSearchSubmit} className="flex mb-32">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              className="px-24 py-3 border border-gray-300 rounded-l-lg focus:outline-none text-xl"
              placeholder="검색어를 입력하세요..."
            />
            <button
              type="submit"
              className="px-8 py-2 bg-yellow-400 text-white rounded-r-lg hover:bg-yellow-500 focus:outline-none text-xl"
            >
              검색
            </button>
          </form>
        </div>
      </div>
      <div className="overflow-x-hidden mx-auto mb-150 max-w-1400 w-full">
        <div className="text-3xl mt-[150px] ml-[140px] mb-[35px]">매물찾기</div>
        <div className="grid grid-cols-2 gap-4">
          {/* 첫 번째 칸 */}
          <Link href="/apartments">
            <div className="w-[436px] h-[141px] bg-white border border-gray-300 rounded-lg shadow flex justify-between mx-auto cursor-pointer transition-transform hover:scale-105">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">아파트</h3>
                <p className="text-sm text-gray-500">매매/전·월세</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-[140px] h-[140px] mr-[20px]"
                  src="./apartment.png"
                  alt="매물 이미지"
                />
              </div>
            </div>
          </Link>

          {/* 두 번째 칸 */}
          <Link href="/officetels">
            <div className="w-[436px] h-[141px] bg-white border border-gray-300 rounded-lg shadow flex justify-between mx-auto cursor-pointer transition-transform hover:scale-105">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">오피스텔</h3>
                <p className="text-sm text-gray-500">매매/전·월세</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-[140px] h-[140px] mr-[20px]"
                  src="./officetels.png"
                  alt="매물 이미지"
                />
              </div>
            </div>
          </Link>

          {/* 세 번째 칸 */}
          <Link href="/oneroom">
            <div className="w-[436px] h-[141px] bg-white border border-gray-300 rounded-lg shadow flex justify-between mx-auto cursor-pointer transition-transform hover:scale-105">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">원룸</h3>
                <p className="text-sm text-gray-500">매매/전·월세</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-[140px] h-[140px] mr-[20px]"
                  src="./oneroom.png"
                  alt="매물 이미지"
                />
              </div>
            </div>
          </Link>

          {/* 네 번째 칸 */}
          <Link href="/rebuilding">
            <div className="w-[436px] h-[141px] bg-white border border-gray-300 rounded-lg shadow flex justify-between mx-auto cursor-pointer transition-transform hover:scale-105">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">재개발·재건축</h3>
                <p className="text-sm text-gray-500">지역</p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-[140px] h-[140px] mr-[20px]"
                  src="./rebuilding.png"
                  alt="매물 이미지"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex justify-evenly mt-[150px]">
          <div className="w-[520.52px] h-[452px] flex flex-col items-center">
            <div className="text-center text-black text-[28px] font-normal mb-[30px]">
              오늘의 매물
            </div>
            <div className="w-[320px] h-[240px] rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="./a1.png"
                alt="오늘의 매물 이미지"
              />
            </div>
          </div>
          <div className="w-[520.52px] h-[452px] flex flex-col items-center">
            <div className="text-center text-black text-[28px] font-normal mb-[30px]">
              급매
            </div>
            <div className="w-[320px] h-[240px] rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="./b1.png"
                alt="오늘의 매물 이미지"
              />
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  )
}

export default Home
