'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface ImageProps {
  src: string
  width: number
  height: number
  alt: string
}

interface ApartmentsProps {
  data: {
    forSaleName: string
    forSalePrice: number
    // image: ImageProps
  }
}

const Apartments = ({ data }: ApartmentsProps) => {
  const { forSaleName, forSalePrice } = data

  const router = useRouter()

  return (
    <>
      <article>
        <button
          type="button"
          onClick={() => router.push('{apartments}/detail/{1}')}
        >
          <Image
            src="/images/apartments.jpg"
            width={365}
            height={290}
            alt="매물이미지"
          />
          <ul>
            <li>{forSaleName}</li>
            <li>{forSalePrice}</li>
          </ul>
        </button>
      </article>
    </>
  )
}

export default Apartments
