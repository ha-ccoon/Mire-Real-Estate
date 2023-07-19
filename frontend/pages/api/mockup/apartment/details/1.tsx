import { NextApiRequest, NextApiResponse } from 'next'

interface Apartment {
  urgent_sale: number
  property_picture: string
  property_name: string
  sale_method: string
  sale_price: string
  gross_leasable_area: number
  exclusive_area: number
  room: number
  washroom: number
  direction: string
  floor: number
  total_floors: number
  availability: string
  description: string
  floor_plan: string
  property_type: string
  management_cost: string
  parking: string
  postal_code: string
  year_built: number
  total_households: number
  property_id: number
  detail_address: string
}

const properties: Apartment[] = [
  {
    urgent_sale: 1,
    property_name: '미래 아파트',
    sale_method: '전세',
    sale_price: '2억 5천만원',
    gross_leasable_area: 21,
    exclusive_area: 19,
    room: 2,
    washroom: 1,
    direction: '남향',
    floor: 7,
    total_floors: 21,
    availability: '2023.07-31',
    description: '남향의 따뜻한 아파트입니다. 편하게 문의주세용',
    property_type: '아파트',
    management_cost: '12만원',
    parking: '1.3대 가능',
    postal_code: '부산시 북구 화명동 무슨길1',
    year_built: 2000,
    total_households: 500,
    property_id: 1,
    detail_address: '104동 1305호',
    property_picture: '123',
    floor_plan: '456',
  },
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(properties)
}
