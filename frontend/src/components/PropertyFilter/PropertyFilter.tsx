import { useState } from 'react'

interface PropertyFilterProps {
  propertyType: 'officetel' | 'oneroom' | 'tworoom' // 매물 유형
}

interface PropertyFilterValues {
  transactionType: '월세' | '전세' // 거래 유형
  deposit: number // 보증금
  rental: number // 월세
  // 전세 보증금
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ propertyType }) => {
  const [filterValues, setFilterValues] = useState<PropertyFilterValues>({
    transactionType: '월세',
    deposit: 0,
    rental: 0,
  })

  const handleTransactionTypeChange = (type: '월세' | '전세') => {
    setFilterValues((prevValues) => ({ ...prevValues, transactionType: type }))
  }

  const handleDepositChange = (value: number) => {
    setFilterValues((prevValues) => ({ ...prevValues, deposit: value }))
  }

  const handleRentalChange = (value: number) => {
    setFilterValues((prevValues) => ({ ...prevValues, rental: value }))
  }

  const handleReset = () => {
    setFilterValues({
      transactionType: '월세',
      deposit: 0,
      rental: 0,
    })
  }

  const handleViewProperties = () => {
    console.log(filterValues) // 선택한 매물 필터 값 처리 또는 매물 보기 동작을 수행할 수 있습니다.
  }

  return (
    <div>
      <div>
        <button
          onClick={() => handleTransactionTypeChange('월세')}
          className={`${
            filterValues.transactionType === '월세'
              ? 'bg-blue-500'
              : 'bg-gray-300'
          } px-4 py-2 rounded`}
        >
          월세
        </button>
        <button
          onClick={() => handleTransactionTypeChange('전세')}
          className={`${
            filterValues.transactionType === '전세'
              ? 'bg-blue-500'
              : 'bg-gray-300'
          } px-4 py-2 rounded`}
        >
          전세
        </button>
      </div>
      <div>
        <label htmlFor="deposit">보증금:</label>
        <input
          type="range"
          id="deposit"
          min={0}
          max={100}
          value={filterValues.deposit}
          onChange={(e) => handleDepositChange(Number(e.target.value))}
        />
        <output>{filterValues.deposit}</output>
      </div>
      <div>
        <label htmlFor="rental">월세:</label>
        <input
          type="range"
          id="rental"
          min={0}
          max={100}
          value={filterValues.rental}
          onChange={(e) => handleRentalChange(Number(e.target.value))}
        />
        <output>{filterValues.rental}</output>
      </div>
      <div>
        <button onClick={handleReset}>초기화</button>
        <button onClick={handleViewProperties}>매물 보기</button>
      </div>
    </div>
  )
}

export default PropertyFilter
