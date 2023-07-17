'use client'

import dynamic from 'next/dynamic'

const PropertyComponent = dynamic(
  () => import('@/components/Property/PropertyComponent'),
  {
    ssr: false,
  },
)

const PropertyFilter = dynamic(
  () => import('@/components/PropertyFilter/PropertyFilter'),
  {
    ssr: false,
  },
)

const OfficetelPage = () => {
  return (
    <>
      <PropertyComponent propertyType="officetel" />
      <PropertyFilter propertyType="officetel" />
    </>
  )
}

export default OfficetelPage
