'use client'

import KakaoMap from '@/components/main/KakaoMap'
import dynamic from 'next/dynamic'

const ApartmentPropertyComponent = dynamic(
  () => import('@/components/Property/ApartmentComponent'),
  {
    ssr: false,
  },
)

const ApartmentPage = () => {
  return (
    <div>
      <main className=" w-screen h-screen ">
        <KakaoMap />
        <ApartmentPropertyComponent propertyType="apartment" />
      </main>
    </div>
  )
}

export default ApartmentPage
