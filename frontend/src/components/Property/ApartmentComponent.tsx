// 아파트 이름 어떻게?
// 전세 7억 7천
// 17평
// 104동 1305호
// 대표 사진 등록 필요

// 아파트 썸네일 컴포넌트
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { MRE } from '../../types'

interface ApartmentComponentProps {
  property: MRE
}

const ApartmentProperty: React.FC<ApartmentComponentProps> = ({ property }) => {
  const {
    property_name,
    urgent_sale,
    sale_method,
    sale_price,
    exclusive_area,
    detail_address,
  } = property

  return (
    <div>
      <h2>{property_name}</h2>
      <p>급매 여부: {urgent_sale}</p>
      <p>판매 형태: {sale_method}</p>
      <p>가격: {sale_price}</p>
      <p>전용 면적: {exclusive_area}</p>
      <p>나머지 주소: {detail_address}</p>
      <img src="/image/property.jpg" alt="대표 사진" />
    </div>
  )
}

export default ApartmentProperty
