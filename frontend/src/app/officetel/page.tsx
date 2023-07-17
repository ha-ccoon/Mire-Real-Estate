'use client'

import dynamic from 'next/dynamic'

const LandForestPropertyComponent = dynamic(
  () => import('@/components/Property/PropertyComponent'),
  {
    ssr: false,
  },
)

const LandForestPage = () => {
  return (
    <>
      <LandForestPropertyComponent propertyType="land-forest" />
    </>
  )
}

export default LandForestPage
