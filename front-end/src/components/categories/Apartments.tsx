'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface ImageProps {
  src: string
  width: number
  height: number
  alt: string
}

const Apartments = () => {
  const router = useRouter()

  return (
    <>
      <article>
        <button
          type="button"
          onClick={() => router.push('apartments/detail/1')}
        >
          <Image
            src="/images/apartments.jpg"
            width={365}
            height={290}
            alt="매물이미지"
          />
          엘리스 아파트
        </button>
      </article>
    </>
  )
}

export default Apartments
