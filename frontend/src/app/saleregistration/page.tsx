'use client'
import { useState, useRef } from 'react'

//@@ 가격-거래종류 함수
const PropertyRegistrationPage = () => {
  const [saleChecked, setSaleChecked] = useState(false)
  const [leaseChecked, setLeaseChecked] = useState(false)
  const [monthlyRentChecked, setMonthlyRentChecked] = useState(false)

  const handleSaleChange = () => {
    setSaleChecked(!saleChecked)
    if (!saleChecked && (leaseChecked || monthlyRentChecked)) {
      setLeaseChecked(false)
      setMonthlyRentChecked(false)
    }
  }

  const handleLeaseChange = () => {
    setLeaseChecked(!leaseChecked)
    if (!leaseChecked && (saleChecked || monthlyRentChecked)) {
      setSaleChecked(false)
      setMonthlyRentChecked(false)
    }
  }

  const handleMonthlyRentChange = () => {
    setMonthlyRentChecked(!monthlyRentChecked)
    if (!monthlyRentChecked && (saleChecked || leaseChecked)) {
      setSaleChecked(false)
      setLeaseChecked(false)
    }
  }

  //@@ 입주가능일 함수
  const [immediateMoveIn, setImmediateMoveIn] = useState(false)
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')

  const handleImmediateMoveInChange = () => {
    setImmediateMoveIn(!immediateMoveIn)
    if (!immediateMoveIn) {
      setYear('')
      setMonth('')
    }
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value)
  }

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value)
  }

  //@@ 매물설명 함수
  const [additionalDescriptions, setAdditionalDescriptions] = useState([])

  const handleAddDescription = () => {
    setAdditionalDescriptions([...additionalDescriptions, ''])
  }

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...additionalDescriptions]
    updatedDescriptions[index] = value
    setAdditionalDescriptions(updatedDescriptions)
  }

  //@@매물사진 함수
  const inputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    // 선택된 파일 처리 로직 작성
    console.log(file)
  }

  const handleBrowseButtonClick = () => {
    inputRef.current.click()
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[1440px] bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">매물등록</h1>
        <hr className="border border-gray-300 mb-6" />
        <div className="flex flex-col mb-6">
          <h2 className="text-xl font-bold mb-4">아파트 매물등록</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-8">위치/구조</h3>
              <div className="border border-gray-300 rounded p-4 mb-[75px]">
                <div className=" items-center mb-4">
                  <label className="w-1/4 mr-14 ml-5 font-bold">주소:</label>
                  <input
                    type="text"
                    className="w-3/4 border border-gray-300 p-3 rounded focus:outline-none"
                    placeholder="주소를 입력하세요"
                  />
                </div>
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-14 ml-5 font-bold">
                        면적:
                      </label>
                      <input
                        type="text"
                        className="w-1/6 border border-gray-300 p-3 rounded focus:outline-none text-center mr-3"
                      />
                      공급면적
                      <input
                        type="text"
                        className="w-1/6 border border-gray-300 p-3 rounded focus:outline-none text-center ml-3 mr-3"
                      />
                      전용면적-㎡
                    </div>
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-[72px] ml-5 font-bold">
                        층:
                      </label>
                      <input
                        type="text"
                        className="w-1/6 border border-gray-300 p-3 rounded focus:outline-none text-center mr-3"
                        placeholder="해당"
                      />
                      층 /
                      <input
                        type="text"
                        className="w-1/6 border border-gray-300 p-3 rounded focus:outline-none text-center ml-3"
                        placeholder="총"
                      />
                      층
                    </div>
                    <div className="flex items-center mb-4">
                      <label className="w-1/5 mr-14 ml-5 font-bold">
                        방향(거실기준):
                      </label>
                      <select
                        className="w-1/3 border border-gray-300 p-3 rounded focus:outline-none"
                        defaultValue="" // 선택 옵션 초기값
                      >
                        <option value="" disabled hidden>
                          방향을 선택하세요
                        </option>
                        <option value="동향">동향</option>
                        <option value="서향">서향</option>
                        <option value="남향">남향</option>
                        <option value="북향">북향</option>
                        <option value="북동향">북동향</option>
                        <option value="남동향">남동향</option>
                        <option value="남서향">남서향</option>
                        <option value="북서향">북서향</option>
                      </select>
                    </div>
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-14 ml-5 font-bold">
                        매물번호:
                      </label>
                      <input
                        type="text"
                        className="w-[70%] border border-gray-300 p-3 rounded focus:outline-none"
                        placeholder="매물번호를 입력하세요"
                      />
                    </div>
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-14 ml-5 font-bold">
                        가격조정:
                      </label>
                      <input
                        type="text"
                        className="w-[70%] border border-gray-300 p-3 rounded focus:outline-none"
                        placeholder="가격조정을 입력하세요"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 pl-2">
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-8 ml-5 font-bold">
                        화장실갯수:
                      </label>
                      <input
                        type="text"
                        className="w-1/6 border border-gray-300 p-3 mr-4 rounded focus:outline-none"
                        placeholder="화장실갯수를 입력하세요"
                      />
                      개
                    </div>
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-14 ml-5 font-bold">
                        방수 :
                      </label>
                      <input
                        type="text"
                        className="w-1/6 border border-gray-300 p-3 ml-5 mr-4 rounded focus:outline-none"
                        placeholder="방수를 입력하세요"
                      />
                      개
                    </div>
                    <div className="flex items-center mb-5 mt-8">
                      <label className="w-1/5 mr-9 ml-5 font-bold">
                        주차여부:
                      </label>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="parking-available"
                          className="mr-2"
                        />
                        <label htmlFor="parking-available">주차가능</label>
                      </div>
                      <div className="flex items-center ml-4">
                        <input
                          type="checkbox"
                          id="parking-unavailable"
                          className="mr-2"
                        />
                        <label htmlFor="parking-unavailable">주차불가능</label>
                      </div>
                    </div>
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-14 ml-5 font-bold">
                        세대수:
                      </label>
                      <input
                        type="text"
                        className="w-1/6 border border-gray-300 p-3 ml-2 mr-4 rounded focus:outline-none"
                        placeholder="세대수를 입력하세요"
                      />
                      세대
                    </div>
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-12 ml-5 font-bold">
                        건축년도:
                      </label>
                      <input
                        type="text"
                        className="w-3/4 border border-gray-300 p-3 rounded focus:outline-none"
                        placeholder="건축년도를 입력하세요"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">가격</h3>
              <div className="border border-gray-300 rounded p-4 mb-[75px]">
                <div className="flex items-center mt-5 mb-7">
                  <label className="w-1/6 mr-14 ml-5 font-bold">
                    거래종류:
                  </label>
                  <div className=" items-center">
                    <input
                      type="checkbox"
                      id="sale"
                      className="mr-2"
                      checked={saleChecked}
                      onChange={handleSaleChange}
                    />
                    <label htmlFor="sale">매매</label>
                  </div>
                  <div className=" items-center ml-4">
                    <input
                      type="checkbox"
                      id="lease"
                      className="mr-2"
                      checked={leaseChecked}
                      onChange={handleLeaseChange}
                    />
                    <label htmlFor="lease">전세</label>
                  </div>
                  <div className=" items-center ml-4">
                    <input
                      type="checkbox"
                      id="monthly-rent"
                      className="mr-2"
                      checked={monthlyRentChecked}
                      onChange={handleMonthlyRentChange}
                    />
                    <label htmlFor="monthly-rent">월세</label>
                  </div>
                  <div className=" items-center ml-4">
                    <input type="checkbox" id="urgent-sale" className="mr-2" />
                    <label htmlFor="urgent-sale">급매</label>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-14 ml-5 font-bold">
                        매매가 :
                      </label>
                      <input
                        type="text"
                        className="w-1/3 border border-gray-300 p-3 ml-5 mr-4 rounded focus:outline-none"
                        placeholder="방수를 입력하세요"
                      />
                      만원 (금액:-원)
                    </div>
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-8 ml-5 font-bold">
                        전세(보증금) :
                      </label>
                      <input
                        type="text"
                        className="w-1/3 border border-gray-300 p-3  mr-4 rounded focus:outline-none"
                        placeholder="방수를 입력하세요"
                      />
                      만원 (금액:-원)
                    </div>
                  </div>
                  <div className="w-1/2 pl-2">
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-14 ml-5 font-bold">
                        월세가 :
                      </label>
                      <input
                        type="text"
                        className="w-1/3 border border-gray-300 p-3 ml-5 mr-4 rounded focus:outline-none"
                        placeholder="방수를 입력하세요"
                      />
                      만원 (금액:-원)
                    </div>
                    <div className=" items-center mb-4">
                      <label className="w-1/4 mr-14 ml-5 font-bold">
                        관리비 :
                      </label>
                      <input
                        type="text"
                        className="w-1/3 border border-gray-300 p-3 ml-5 mr-4 rounded focus:outline-none"
                        placeholder="방수를 입력하세요"
                      />
                      만원 (금액:-원)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">입주일</h3>
              <div className="border border-gray-300 rounded p-4 mb-[75px]">
                <div className="flex items-center mb-2 mt-2">
                  <label className="w-1/5 mr-14 ml-5 font-bold">
                    입주 가능일:
                  </label>
                  <div className="items-center mr-14">
                    <input
                      type="checkbox"
                      id="immediate-move-in"
                      className="mr-2"
                      checked={immediateMoveIn}
                      onChange={handleImmediateMoveInChange}
                    />
                    <label htmlFor="immediate-move-in">즉시 입주 가능</label>
                  </div>
                  {!immediateMoveIn && (
                    <div className="items-center ml-4">
                      <input
                        type="text"
                        className="w-1/4 border border-gray-300 p-3 rounded focus:outline-none"
                        placeholder="년도"
                        value={year}
                        onChange={handleYearChange}
                      />
                      <span className="mx-2">년</span>
                      <input
                        type="text"
                        className="w-1/4 border border-gray-300 p-3 rounded focus:outline-none"
                        placeholder="월"
                        value={month}
                        onChange={handleMonthChange}
                      />
                      <span className="mx-2">월</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">상세정보</h3>
              <div className="border border-gray-300 rounded p-4 ">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <label className="font-bold mr-4">매물설명:</label>
                    <div className="ml-14 flex flex-col">
                      {additionalDescriptions.map((description, index) => (
                        <div key={index} className="flex items-center mb-2">
                          ✔
                          <input
                            type="text"
                            className="w-[1000px] border border-gray-300 p-3 rounded focus:outline-none ml-2"
                            placeholder="매물 상세 페이지에 노출되는 문구입니다."
                            value={description}
                            onChange={(e) =>
                              handleDescriptionChange(index, e.target.value)
                            }
                          />
                        </div>
                      ))}
                      <button
                        className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700"
                        onClick={handleAddDescription}
                      >
                        추가
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 ">
                <div className="flex items-center mb-2 mt-2">
                  <label className="w-1/6 mr-2 ml-5 font-bold">매물사진:</label>
                  <div className="flex items-center">
                    <input
                      ref={inputRef}
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <button
                      className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700"
                      onClick={handleBrowseButtonClick}
                    >
                      사진 불러오기
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 rounded p-4 ">
                <div className="flex items-center mb-2 mt-2">
                  <label className="w-1/6 mr-2 ml-5 font-bold">평면도:</label>
                  <div className="flex items-center">
                    <input
                      ref={inputRef}
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <button
                      className="py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700"
                      onClick={handleBrowseButtonClick}
                    >
                      사진 불러오기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="py-4 px-7 bg-gray-800 text-white rounded hover:bg-gray-700 text-xl">
            매물등록
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyRegistrationPage
