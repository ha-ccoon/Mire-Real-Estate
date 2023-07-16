import { NextApiRequest, NextApiResponse } from 'next'
import { MRE } from '../../../src/types'

interface Property {
  property_name: string
  sale_price: number
  property_id: number
  urgent_sale: number
  property_type: string
  deposit: string
  exclusive_area: number
  floor: number
  total_floors: number
  postal_code: string
}

const properties: Property[] = []

for (let i = 1; i <= 50; i++) {
  const dummyProperty: Property = {
    property_name: `원룸 ${i}`,
    sale_price: Math.floor(Math.random() * 1000000000) + 100000000,
    property_id: i,
    urgent_sale: Math.random() < 0.5 ? 0 : 1,
    property_type: Math.random() < 0.5 ? '월세' : '전세',
    deposit: (Math.floor(Math.random() * 10000000) + 1000000).toString(),
    exclusive_area: Math.floor(Math.random() * 10) + 1,
    floor: Math.floor(Math.random() * 20) + 1,
    total_floors: Math.floor(Math.random() * 20) + 1,
    postal_code: '부산 엄궁동',
  }

  properties.push(dummyProperty)
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties)
}
