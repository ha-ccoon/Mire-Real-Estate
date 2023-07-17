'use client'

import dynamic from 'next/dynamic'

const PropertyComponent = dynamic(
  () => import('@/components/Property/PropertyComponent'),
  {
    ssr: false,
  },
)

const PropertyPage = () => {
  return (
    <>
      <PropertyComponent propertyType="officetel" />
    </>
  )
}

export default PropertyPage
