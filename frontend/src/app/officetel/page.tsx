'use client'

import dynamic from 'next/dynamic'

const PropertyComponent = dynamic(
  () => import('@/components/Property/PropertyComponent'),
  {
    ssr: false,
  },
)

const OfficetelPage = () => {
  return (
    <>
      <PropertyComponent propertyType="officetel" />
    </>
  )
}

export default OfficetelPage
