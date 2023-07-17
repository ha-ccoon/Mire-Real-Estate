import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { MRE } from '../../types'

interface LandForestProperty {
  urgent_sale: number
  property_id: number
  sale_method: string //매매, 임대
  property_type: string // 매물 타입
  postal_code: string // 매물 주소
  property_name: string
  deposit: string
  sale_price: string
  land_area: number
  // 평수
}

interface LandForestComponentProps {
  propertyType: string
}
// 토지/임야,토지 매물 목록 컴포넌트
const LandPropertyComponent: React.FC<LandForestComponentProps> = ({
  propertyType,
}) => {
  const [properties, setProperties] = useState<LandForestProperty[]>([])
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
      const processData: LandForestProperty[] = data.map((mre: MRE) => ({
        urgent_sale: mre.urgent_sale,
        property_id: mre.property_id,
        sale_method: mre.sale_method,
        property_type: mre.property_type,
        postal_code: mre.postal_code,
        property_name: mre.property_name,
        deposit: mre.deposit,
        sale_price: mre.sale_price,
        land_area: mre.land_area,
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
        className="text-xl text-center font-bold mt-5"
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
                  className="mr-2"
                  style={{ width: '155px', height: '113px' }}
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
                      {property.sale_method}
                      {property.sale_method === '임대' && (
                        <span> {property.deposit.toLocaleString()}/</span>
                      )}
                      <span> {property.sale_price?.toLocaleString()}원</span>
                    </span>
                    <span
                      className="text-[#9a9a9a] text-left left-[168px] top-9 w-[189px] h-12"
                      style={{ font: '400 13px' }}
                    >
                      <p>{property.property_type}</p>
                      <p>{property.land_area}평</p>
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

export default LandPropertyComponent
