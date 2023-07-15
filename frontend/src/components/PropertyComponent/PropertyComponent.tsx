import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { MRE } from '../../types'

// 매물 목록(오피스텔, 원룸, 투룸) 공통 컴포넌트
interface Property {
  property_name: string
  sale_price: string
  property_id: number
  urgent_sale: number
  property_type: string
  deposit: string
  exclusive_area: number
  floor: number
  total_floors: number
  postal_code: number
}

interface PropertyComponentProps {
  propertyType: string
}

const PropertyComponent: React.FC<PropertyComponentProps> = ({
  propertyType,
}) => {
  const [properties, setProperties] = useState<Property[]>([])
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
      const processData: Property[] = data.map((mre: MRE) => ({
        property_name: mre.property_name,
        sale_price: mre.sale_price,
        property_id: mre.property_id,
        urgent_sale: mre.urgent_sale,
        property_type: mre.property_type,
        deposit: mre.deposit,
        exclusive_area: mre.exclusive_area,
        floor: mre.floor,
        total_floors: mre.total_floors,
        postal_code: mre.postal_code,
      }))
      setProperties((prevProperties) => [...prevProperties, ...processData])
      setPage((prevPage) => prevPage + 1)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
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
    <div className="w-[404px] relative ">
      <h1
        className="text-xl text-center font-bold"
        style={{ fontSize: '15px' }}
      >
        지역 목록 {properties.length}개
      </h1>
      {properties.map((property, index) => (
        <article
          key={index}
          className="bg-grey-200 p-4 mb-4 rounded-lg flex items-center"
        >
          <h3 className="mr-4 flex-shrink-0">
            <Link href={`/${propertyType}/details/${property.property_id}`}>
              <div className="flex items-center">
                <img
                  src="/image/property.jpg"
                  alt={property.property_name}
                  className="w-155 h-113 mr-2"
                />
                <div>
                  <h3 className="mr-4 flex-shrink-0">
                    <p>
                      {property.urgent_sale === 1 ? (
                        <span role="img" aria-label="Urgent">
                          🚨급매
                        </span>
                      ) : (
                        ''
                      )}
                    </p>
                    <span
                      className="text-center relative font-bold"
                      style={{
                        fontFamily: 'SpoqaHanSansNeo-Bold',
                        fontSize: '20px',
                      }}
                    >
                      {property.property_type}
                      {property.property_type === '월세' && (
                        <span> {property.deposit.toLocaleString()}/</span>
                      )}
                      {property.sale_price.toLocaleString()}원
                    </span>
                    <span
                      className="text-[#9a9a9a] text-left left-[168px] top-9 w-[189px] h-12"
                      style={{ font: '400 13px' }}
                    >
                      <p>{property.exclusive_area}평</p>
                      <p>
                        {property.floor}층 / {property.total_floors}층
                      </p>
                      <p>{property.postal_code}</p>
                    </span>
                  </h3>
                </div>
              </div>
            </Link>
          </h3>
        </article>
      ))}
      <div ref={containerRef} style={{ height: '100vh' }}>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  )
}

export default PropertyComponent
