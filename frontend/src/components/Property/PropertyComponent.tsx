import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Link from 'next/link'

interface Property {
  name: string
  price: number
  id: number
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
      setProperties((prevProperties) => [...prevProperties, ...response.data])
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
    <div>
      <h1>부동산 매물 목록</h1>
      {properties.map((property, index) => (
        <div key={index}>
          <h3>
            <Link href={`/${propertyType}/${property.id}`}>
              <p>{property.name}</p>
              <p>{property.price.toLocaleString()}원</p>
            </Link>
          </h3>
        </div>
      ))}
      <div ref={containerRef} style={{ height: '100vh' }}>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  )
}

export default PropertyComponent
