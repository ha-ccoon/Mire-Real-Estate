'use client'

import { useEffect, useState } from 'react'
import Thumbnail from '@/components/categories/Thumbnail'
import axios from 'axios'

const Page = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties')
        setProperties(response.data)
      } catch (error) {
        console.log('🔥페이지 컴포넌트에서 에러발생')
      }
    }

    fetchProperties()
  }, [])

  return <Thumbnail properties={properties} />
}

export default Page
