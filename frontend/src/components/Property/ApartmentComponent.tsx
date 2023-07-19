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
  property_picture: string
  deposit: string
}
interface ApartmentsComponentProps {
  propertyType: string
}

const PropertyComponent = ({ propertyType }: PropertyComponentProps) => {
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
        threshold: 0.5,
      })
      observer.observe(containerRef.current)
    }
  }, [])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get<MRE[]>(
        `/api/mockup/${propertyType}?page=${page}`,
      )
      const processData: ApartmentsProperty[] = data.map((mre: MRE) => ({
        property_name: mre.property_name,
        sale_price: mre.sale_price,
        urgent_sale: mre.urgent_sale,
        sale_method: mre.sale_method,
        exclusive_area: mre.exclusive_area,
        detail_address: mre.detail_address,
        property_id: mre.property_id,
        property_picture: mre.property_picture,
        deposit: mre.deposit,
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
    <div className="w-[404px] bg-white relative">
      <h1
        className="text-xl text-center font-bold mb-26 mt-5"
        style={{ fontSize: '15px' }}
      >
        지역 목록 {properties.length}개
      </h1>
      <div className="flex flex-wrap">
        {properties.map((property, index) => (
          <article key={index} className="w-1/2 px-4 mb-9">
            <Link href={`/${propertyType}/details/${property.property_id}`}>
              <div
                className="opacity-0.6 hover: opacity-1"
                style={{
                  backgroundImage: `url('/image/property.jpg')`, // 매물 이미지 데이터로 변경
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-reapeat',
                  width: '181px',
                  height: '275px',
                  flexShrink: 0,
                  opacity: '0.6',
                  borderRadius: '15px',
                  color: '#000000',
                }}
              >
                <div>
                  <p>
                    {property.urgent_sale === 1 ? (
                      <span role="img" aria-label="Urgent">
                        🚨급매
                      </span>
                    ) : (
                      ''
                    )}
                  </p>
                  <h2
                    style={{
                      fontSize: '25px',
                    }}
                  >
                    {property.property_name}
                  </h2>
                  <span>{property.sale_method}</span>
                  {property.sale_method === '월세' && (
                    <span> {property.deposit}/</span>
                  )}
                  <span> {property.sale_price}</span>
                  <p>{property.exclusive_area}평</p>
                  <p>{property.detail_address}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div ref={containerRef} style={{ height: '100vh' }}>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  )
}

export default ApartmentPropertyComponent
