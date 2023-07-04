// 원룸 목업 데이터
'use client'

// import dynamic from 'next/dynamic'

// const Property = dynamic(() => import('@/components/Property/Property'), {
//   ssr: false,
// })

// const Page = () => {
//   return (
//     <>
//       <Property />
//     </>
//   )
// }

// export default Page

import dynamic from 'next/dynamic'

const PropertyComponent = dynamic(
  () => import('@/components/Property/PropertyComponent'),
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
