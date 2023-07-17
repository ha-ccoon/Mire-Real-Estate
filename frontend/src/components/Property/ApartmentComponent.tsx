import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { MRE } from '../../types'
import Link from 'next/link'

// 아파트 매물 목록 컴포넌트
interface ApartmentsProperty {
  property_name: string
  urgent_sale: number
  sale_method: string
  sale_price: string
  exclusive_area: number
  detail_address: string
  property_id: number
}
interface ApartmentsComponentProps {
  propertyType: string
}

const ApartmentPropertyComponent: React.FC<ApartmentsComponentProps> = ({
  propertyType,
}) => {
  const [properties, setProperties] = useState<ApartmentsProperty[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver(handleObserver, {
        threshold: 1,
      })
      observer.observe(containerRef.current)
    }
  }, [])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(
        `/api/mockup/${propertyType}?page=${page}`,
      )

      const data: MRE[] = response.data
      const processData: ApartmentsProperty[] = data.map((mre: MRE) => ({
        property_name: mre.property_name,
        sale_price: mre.sale_price,
        urgent_sale: mre.urgent_sale,
        sale_method: mre.sale_method,
        exclusive_area: mre.exclusive_area,
        detail_address: mre.detail_address,
        property_id: mre.property_id,
      }))
      setProperties((prevProperties) => [...prevProperties, ...processData])
      setPage((prevPage) => prevPage + 1)
      setIsLoading(false)
    } catch (error) {
      console.error('🦖에러:', error)
      setIsLoading(false)
    }
  }

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting) {
      fetchData()
    }
  }

  return (
    <div>
      {properties.map((property, index) => (
        <div key={index}>
          <Link href={`/${propertyType}/details/${property.property_id}`}>
            <div>
              <h2>{property.property_name}</h2>
              <p>급매 여부: {property.urgent_sale}</p>
              <p>판매 형태: {property.sale_method}</p>
              <p>가격: {property.sale_price}</p>
              <p>전용 면적: {property.exclusive_area}</p>
              <p>나머지 주소: {property.detail_address}</p>
            </div>
          </Link>
        </div>
      ))}
      <div ref={containerRef} style={{ height: '100vh' }}>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  )
}

export default ApartmentPropertyComponent
