'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

interface Property {
  name: string
  price: number
  id: number
}

const Page = () => {
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/mockup/properties')
        setProperties(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

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
    </div>
  )
}

export default Page
