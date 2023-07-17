import { NextApiRequest, NextApiResponse } from 'next'

interface Property {
  property_picture: string
  postal_code: number
  sale_method: string
  deposit: string
  sale_price: string
  management_cost: string
  exclusive_area: number
  gross_leasable_area: number
  direction: string
  floor: number
  total_floors: number
  room: number
  washroom: number
  parking: string
  availability: string
  year_built: number
}

const properties: Property[] = [
  {
    property_picture: '123',
    postal_code: 46523,
    sale_method: '전세',
    deposit: '2000만원',
    sale_price: '35만원',
    management_cost: '7만원',
    exclusive_area: 7,
    gross_leasable_area: 15,
    direction: '남향',
    floor: 3,
    total_floors: 5,
    room: 1,
    washroom: 1,
    parking: '1대',
    availability: '즉시 입주 가능',
    year_built: 2023,
  },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties)
}
