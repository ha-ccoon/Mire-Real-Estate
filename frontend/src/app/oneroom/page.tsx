'use client'

import dynamic from 'next/dynamic'

const PropertyComponent = dynamic(
  () => import('@/components/PropertyComponent/PropertyComponent'),
  {
    ssr: false,
  },
)

const OneroomPage = () => {
  return (
    <>
      <PropertyComponent propertyType="oneroom" />
    </>
  )
}

export default OneroomPage
