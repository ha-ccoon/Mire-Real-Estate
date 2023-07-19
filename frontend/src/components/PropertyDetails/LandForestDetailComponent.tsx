'use client'
import { MRE } from '../../types'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

interface LandForest {
  property_id: number
  urgent_sale: number
  property_picture: string
  sale_method: string
  sale_price: string
  deposit: string
  property_type: string
  postal_code: string
  land_area: number
  area_of_use: string
  description: string
  detail_address: string
  property_name: string
}

interface LandForestDetailComponentProps {
  propertyType: string
}

const LandForestDetailComponent = ({
  propertyType,
}: LandForestDetailComponentProps) => {
  const [properties, setProperties] = useState<LandForest[]>([])
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
      const processData: LandForest[] = data.map((mre: MRE) => ({
        property_picture: mre.property_picture,
        sale_method: mre.sale_method,
        sale_price: mre.sale_price,
        deposit: mre.deposit,
        property_type: mre.property_type,
        postal_code: mre.postal_code,
        land_area: mre.land_area,
        area_of_use: mre.area_of_use,
        description: mre.description,
        detail_address: mre.detail_address,
        urgent_sale: mre.urgent_sale,
        property_id: mre.property_id,
        property_name: mre.property_name,
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
        <article key={index} data-id={property.property_id}>
          <img src={property.property_picture} alt={property.property_name} />
          <p>{property.urgent_sale}</p>
          <p>{property.property_type}</p>
          <h1>
            {property.sale_method}
            <span>{property.sale_price}</span>
          </h1>
          <section>
            <h2>위치</h2>
            <p>{property.postal_code}</p>
          </section>
          <section>
            <h2>대지면적</h2>
            <p>{property.land_area}</p>
          </section>
          <section>
            <h2>용도지역</h2>
            <p>{property.area_of_use}</p>
          </section>
          <section>
            <h2>보증금</h2>
            <p>{property.deposit}</p>
          </section>
          <section>
            <h2>중개사님의 설명</h2>
            <p>{property.description}</p>
          </section>
          <section>
            <h2>위치</h2>
            <p>표시된 범위 안에 매물이 있습니다.</p>
            <p>카카오 지도</p>
          </section>
        </article>
      ))}
      <div ref={containerRef} style={{ height: '100vh' }}>
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  )
}

export default LandForestDetailComponent
