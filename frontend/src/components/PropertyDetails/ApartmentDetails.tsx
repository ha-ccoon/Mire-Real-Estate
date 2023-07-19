'use client'
import { MRE } from '../../types'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

interface Apartment {
  urgent_sale: number
  property_picture: string
  property_name: string
  sale_method: string
  sale_price: string
  gross_leasable_area: number
  exclusive_area: number
  room: number
  washroom: number
  direction: string
  floor: number
  total_floors: number
  availability: string
  description: string
  floor_plan: string
  property_type: string
  management_cost: string
  parking: string
  postal_code: string
  year_built: number
  total_households: number
  property_id: number
  detail_address: string
}

interface ApartmentDetailComponentProps {
  propertyType: string
}

const ApartmentDetailComponent: React.FC<ApartmentDetailComponentProps> = ({
  propertyType,
}) => {
  const [properties, setProperties] = useState<Apartment[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver(handleObserver, {
        threshold: 0.5,
      })
      observer.observe(containerRef.current)
    }
  }, [])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(
        `/api/mockup/${propertyType}/details/${page}`,
      )

      const data: MRE[] = response.data
      const processData: Apartment[] = data.map((mre: MRE) => ({
        urgent_sale: mre.urgent_sale,
        property_name: mre.property_name,
        sale_method: mre.sale_method,
        sale_price: mre.sale_price,
        gross_leasable_area: mre.gross_leasable_area,
        exclusive_area: mre.exclusive_area,
        room: mre.room,
        washroom: mre.washroom,
        direction: mre.direction,
        floor: mre.floor,
        total_floors: mre.total_floors,
        availability: mre.availability,
        description: mre.description,
        floor_plan: mre.floor_plan,
        property_type: mre.property_type,
        management_cost: mre.management_cost,
        parking: mre.parking,
        postal_code: mre.postal_code,
        year_built: mre.year_built,
        total_households: mre.total_households,
        property_id: mre.property_id,
        property_picture: mre.property_picture,
        detail_address: mre.detail_address,
      }))
      setProperties((prevProperties) => [...prevProperties, ...processData])
      setPage((prevPage) => prevPage + 1)
      setIsLoading(false)
    } catch (error) {
      console.error('🦖 에러메세지: ', error)
      setIsLoading(false)
    }
  }

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting) {
      const id = target.target.getAttribute('data-id')
      if (id) {
        fetchData()
      }
    }
  }

  return (
    <>
      {properties.map((property, index) => (
        <div key={index} data-id={property.property_id}>
          <img src={property.property_picture} alt={property.property_name} />
          <p>{property.urgent_sale}</p>
          <h1>
            {property.sale_method}
            <span>{property.sale_price}</span>
          </h1>
          ----------------------
          <ul>
            <li>
              전용 {property.exclusive_area}평/공급{' '}
              {property.gross_leasable_area}평
            </li>
            <li>{property.detail_address}</li>
            <li>{property.direction}</li>
            <li>
              {property.floor}층/{property.total_floors}
            </li>
          </ul>
          ----------------------
          <p>
            중개사님의 설명
            {property.description}
          </p>
          ----------------------
          <p>
            내부 평면도
            <img src={property.floor_plan} alt={property.property_name} />
          </p>
          -----------------------
          <ul>
            <li>유형:{property.property_type}</li>
            <li>관리비:{property.management_cost}</li>
            <li>주차:{property.parking}</li>
            <li>위치:{property.postal_code}</li>
            <li>건축년도:{property.year_built}</li>
            <li>총세대수:{property.total_households}</li>
          </ul>
        </div>
      ))}
      <div ref={containerRef} style={{ height: '100vh' }}>
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  )
}

export default ApartmentDetailComponent
