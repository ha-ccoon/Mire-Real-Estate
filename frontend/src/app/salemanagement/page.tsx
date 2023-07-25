'use client'

import { useState } from 'react'

const PropertyManagementPage = () => {
  const propertyList = [
    {
      id: 2327661442,
      type: '아파트',
      location: '은평구 응암동 46-35',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2326500263,
      type: '아파트',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 232734009,
      type: '주택',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 320403994,
      type: '오피스텔·원룸·투룸',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2327822195,
      type: '아파트',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2326991309,
      type: '오피스텔·원룸·투룸',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2328243218,
      type: '상가·점포',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2326504230,
      type: '오피스텔·원룸·투룸',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2327654030,
      type: '오피스텔·원룸·투룸',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2326522330,
      type: '아파트',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2327654030,
      type: '오피스텔·원룸·투룸',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    {
      id: 2326522330,
      type: '아파트',
      location: '서울시 강남구',
      transaction: '매매 / 1억 5000만원',
      date: '2023-07-18',
    },
    // 다른 매물들...
  ]

  const [currentPage, setCurrentPage] = useState(1) // 현재 페이지 번호
  const itemsPerPage = 10 // 페이지 당 아이템 개수

  // 현재 페이지에 해당하는 매물 리스트 계산
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = propertyList.slice(indexOfFirstItem, indexOfLastItem)

  // 페이지 번호 클릭 시 페이지 변경
  const handleClickPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // 페이지 번호 버튼 생성
  const pageNumbers: number[] = []
  for (let i = 1; i <= Math.ceil(propertyList.length / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[1440px] bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mt-[150px] mb-6 text-left">
          매물관리
        </h1>
        <hr className="border border-gray-300 mb-14" />
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-4">
            <button className="border rounded-full border-gray-300 py-2 px-4  hover:bg-gray-200">
              전체
            </button>
            <button className="border rounded-full border-gray-300 py-2 px-4 hover:bg-gray-200">
              아파트
            </button>
            <button className="border rounded-full border-gray-300 py-2 px-4 hover:bg-gray-200">
              오피스텔·원룸·투룸
            </button>
            <button className="border rounded-full border-gray-300 py-2 px-4 hover:bg-gray-200">
              주택
            </button>
            <button className="border rounded-full border-gray-300 py-2 px-4 hover:bg-gray-200">
              상가·점포
            </button>
            <button className="border rounded-full border-gray-300 py-2 px-4 hover:bg-gray-200">
              공장
            </button>
            <button className="border rounded-full border-gray-300 py-2 px-4 hover:bg-gray-200">
              임야·토지
            </button>
          </div>
          <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
            매물등록
          </button>
        </div>
        <div className="flex justify-end mb-4">
          <button
            className="mr-2 py-2 px-4 bg-gray-200 rounded"
            onClick={() => handleClickPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전 페이지
          </button>
          <button
            className="py-2 px-4 bg-gray-200 rounded"
            onClick={() => handleClickPage(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(propertyList.length / itemsPerPage)
            }
          >
            다음 페이지
          </button>
        </div>
        <div className="mb-6">
          <div className="flex h-[60px] bg-gray-200 py-4 px-4 text-xl font-bold">
            <div className="w-1/6">매물번호</div>
            <div className="w-1/6">매물종류</div>
            <div className="w-2/6">지역명/상세주소</div>
            <div className="w-1/6">거래종류/매물가</div>
            <div className="w-1/6">등록일</div>
            <div className="w-1/6 text-center">관리</div>
          </div>
          {propertyList
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((property) => (
              <div key={property.id} className="flex py-3 px-4">
                <div className="w-1/6">{property.id}</div>
                <div className="w-1/6">{property.type}</div>
                <div className="w-2/6">{property.location}</div>
                <div className="w-1/6">{property.transaction}</div>
                <div className="w-1/6">{property.date}</div>
                <div className="w-1/6 flex flex-col items-center">
                  <button className="w-[85px] h-[28] mb-2 bg-yellow-300 rounded-full hover:bg-yellow-200">
                    수정
                  </button>
                  <button className="w-[85px] h-[28] bg-red-400  rounded-full hover:bg-red-300">
                    삭제
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`mx-1 py-2 px-4 ${
                pageNumber === currentPage
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200'
              } rounded`}
              onClick={() => handleClickPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        {/* 페이지네이션 부분 */}
        {/* 페이지 번호 또는 다음/이전 버튼 등을 표시 */}
      </div>
    </div>
  )
}

export default PropertyManagementPage
