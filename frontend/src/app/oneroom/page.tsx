'use client'

import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

interface Property {
  name: string
  price: number
  id: number
}

const Page = () => {
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
      const response = await axios.get('/api/mockup/properties?page=${page}')
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
          <h3>{property.name}</h3>
          <p>{property.price.toLocaleString()}원</p>
          <p>{property.id}</p>
        </div>
      ))}
      <div ref={containerRef} style={{ height: '100vh' }}>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  )
}

export default Page
