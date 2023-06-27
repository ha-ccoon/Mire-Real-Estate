'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import axios from 'axios'

interface PropertyProps {
  id: number
  image: string
  name: string
  price: number
  slug: string
}

interface ThumbnailProps {
  properties: PropertyProps[]
}

const Thumbnail = ({ properties }: ThumbnailProps) => {
  const router = useRouter()

  const handlePropertyClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    slug: string,
  ) => {
    e.preventDefault()
    router.push(`${process.env.NEXT_PUBLIC_FETCH_BASEURL}/${slug}/detail/${id}`)
  }

  return (
    <>
      {properties.map((property) => {
        ;<div
          key={property.id}
          onClick={(e) => handlePropertyClick(e, property.id, property.slug)}
        >
          <div className="thumbnail-container">
            <Image
              src={property.image}
              alt={property.name}
              width={200}
              height={200}
            />
            <div className="thumbnail-info">
              <h3 className="property-name">{property.name}</h3>
              <p className="property-price">
                {property.price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      })}
    </>
  )
}

export default Thumbnail
