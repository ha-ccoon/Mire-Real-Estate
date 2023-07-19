'use client'

import dynamic from 'next/dynamic'

const LandPropertyComponent = dynamic(
  () => import('@/components/Property/LandComponent'),
  {
    ssr: false,
  },
)

const LandForestPage = () => {
  return <LandPropertyComponent propertyType="land-forest" />
}

export default LandForestPage
